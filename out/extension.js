"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = require("vscode");
const path = require("path");
const BROWSER_OPEN = 'workbench.action.browser.open';
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('openPdfWithBrowser.open', async (arg) => {
        const uri = normalizeUri(arg);
        if (!uri || path.extname(uri.path).toLowerCase() !== '.pdf') {
            vscode.window.showErrorMessage('openPdfWithBrowser: no PDF file specified.');
            return;
        }
        // The integrated browser accepts file:// URLs directly; keep scheme and
        // authority encoding intact (skipEncoding=false keeps file:// well-formed).
        await vscode.commands.executeCommand(BROWSER_OPEN, uri.toString(true));
    }));
    context.subscriptions.push(vscode.window.registerCustomEditorProvider('openPdfWithBrowser.viewer', {
        async openCustomDocument(uri) {
            return { uri, dispose() { } };
        },
        async resolveCustomEditor(document, webviewPanel, _token) {
            // Opening the integrated browser tab makes the browser the active
            // editor, so close THIS tab via its panel, not "closeActiveEditor"
            // (which would close the just-opened browser tab).
            await vscode.commands.executeCommand(BROWSER_OPEN, document.uri.toString(true));
            webviewPanel.dispose();
        },
    }, { supportsMultipleEditorsPerDocument: false }));
}
function normalizeUri(arg) {
    if (arg instanceof vscode.Uri) {
        return arg;
    }
    if (typeof arg === 'string') {
        try {
            return vscode.Uri.parse(arg, true);
        }
        catch {
            const file = arg.trim();
            if (file) {
                return vscode.Uri.file(file);
            }
        }
    }
    const active = vscode.window.activeTextEditor?.document.uri;
    if (active && path.extname(active.path).toLowerCase() === '.pdf') {
        return active;
    }
    return undefined;
}
//# sourceMappingURL=extension.js.map