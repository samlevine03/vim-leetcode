(function injectScript() {
  // create script element to inject into page
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("inject.js");

  // remove the script element after execution
  script.onload = function () {
    this.remove();
  };

  // append the script element to the page
  (document.head || document.documentElement).appendChild(script);
})();
