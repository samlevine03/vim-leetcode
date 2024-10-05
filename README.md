# LeetCode Vim Mode Extension

This Chrome extension adds Vim keybindings to the Monaco editor used in LeetCode, enabling you to use Vim commands while solving coding problems on the platform.

## How It Works 

 - **Monaco Editor Integration**: LeetCode uses the Monaco editor for its code editor. This extension injects a script into the LeetCode page to enable Vim keybindings using the `monaco-vim` library.
 - **Script Injection**: The extension injects a script (`inject.js`) into the LeetCode page through the content script (`content.js`). The injected script waits for the Monaco editor to load and then applies the Vim keybindings.

## How to Install the Extension Manually

I didn't feel like paying the 5 bucks to put this on the Chrome Web Store..

![image](https://github.com/user-attachments/assets/c8265670-2cda-497e-b6c3-517245b305df)

1. Clone this repository to your local machine.
```bash
git clone https://github.com/samlevine03/vim-leetcode.git
cd vim-leetcode
```
2. Open Chrome and navigate to chrome://extensions/.
3. Enable Developer Mode by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory where this repository is located (`vim-leetcode`).
5. Verify the extension is loaded:
 - You should now see the extension in the list of installed extensions in Chrome.
 - Navigate to LeetCode and open a coding problem.
 - Vim mode will automatically be enabled in the Monaco editor.

## Contributing

Not really sure if there's anything to be done here, but feel free to open issues or submit PRs!

## Liscense

This project is licensed under the MIT License. 
