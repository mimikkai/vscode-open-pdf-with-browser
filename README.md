# Open PDF with Browser

VS Code extension that opens PDF files in the integrated browser (`workbench.action.browser.open`). Also works in forks that ship the built-in browser editor (e.g. MimikkAI Editor).

## What it does

- Command **Open PDF with Browser** — opens the active/selected PDF as `file:///path/to/file.pdf` in the integrated browser tab.
- Custom editor **PDF in Browser** registered as the **default** for `*.pdf` — double-click or Enter on a PDF file opens it in the integrated browser instead of the binary text view. The helper tab closes itself and leaves the browser tab open.
- Context menu entries: Explorer context menu and editor title bar (globe icon) for `.pdf` files.

## Install

```bash
code --install-extension open-pdf-with-browser-0.0.3.vsix
```

> Requires an editor with the integrated browser (`workbench.action.browser.open` command).

## Build

```bash
npm install
npm run compile
npx @vscode/vsce package --no-dependencies
```