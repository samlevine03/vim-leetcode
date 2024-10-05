(function initializeVimMode() {
  function waitForEditor() {
    if (window.monaco && window.monaco.editor) {
      const editors = window.monaco.editor.getEditors
        ? window.monaco.editor.getEditors()
        : [];

      const editor = editors[0];
      if (editor) {
        enableVimMode(editor);
      } else {
        setTimeout(waitForEditor, 500);
      }
    } else {
      setTimeout(waitForEditor, 500);
    }
  }

  function enableVimMode(editor) {
    // inject the monaco-vim script from the CDN
    const monacoVimScript = document.createElement("script");
    monacoVimScript.src = "https://unpkg.com/monaco-vim/dist/monaco-vim.js";
    monacoVimScript.onload = () => {
      const statusNode = document.createElement("div");

      // styles for the status bar relative to the editor
      statusNode.style.position = "absolute";
      statusNode.style.bottom = "10px";
      statusNode.style.left = "10px";
      statusNode.style.backgroundColor = "#333";
      statusNode.style.color = "#fff";
      statusNode.style.padding = "5px 10px";
      statusNode.style.borderRadius = "5px";
      statusNode.style.zIndex = "10";

      // append the status bar to the editor's container
      const editorDomNode = editor.getDomNode();
      editorDomNode.style.position = "relative";
      editorDomNode.appendChild(statusNode);
      monacoVim.initVimMode(editor, statusNode);
    };
    document.body.appendChild(monacoVimScript);

    // inject the monaco-vim CSS for proper styling
    const monacoVimCSS = document.createElement("link");
    monacoVimCSS.rel = "stylesheet";
    monacoVimCSS.href = "https://unpkg.com/monaco-vim/dist/monaco-vim.css";
    document.head.appendChild(monacoVimCSS);
  }

  // start checking for the editor on page load
  waitForEditor();
})();
