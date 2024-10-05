# LeetCode Vim Mode Extension

This Chrome extension adds Vim keybindings to the Monaco editor used in LeetCode, enabling you to use Vim commands while solving coding problems on the platform.

## How It Works 

 - **Monaco Editor Integration**: LeetCode uses the Monaco editor for its code editor. This extension injects a script into the LeetCode page to enable Vim keybindings using the `monaco-vim` library.
 - **Script Injection**: The extension injects a script (`inject.js`) into the LeetCode page through the content script (`content.js`). The injected script waits for the Monaco editor to load and then applies the Vim keybindings.