import * as vscode from 'vscode';
import * as path from 'path';

const BROWSER_OPEN = 'workbench.action.browser.open';

export function activate(context: vscode.ExtensionContext): void {
	context.subscriptions.push(
		vscode.commands.registerCommand('openPdfWithBrowser.open', async (arg: unknown) => {
			const uri = normalizeUri(arg);
			if (!uri || path.extname(uri.path).toLowerCase() !== '.pdf') {
				vscode.window.showErrorMessage('openPdfWithBrowser: no PDF file specified.');
				return;
			}
			// The integrated browser accepts file:// URLs directly; keep scheme and
			// authority encoding intact (skipEncoding=false keeps file:// well-formed).
			await vscode.commands.executeCommand(BROWSER_OPEN, uri.toString(true));
		})
	);

	context.subscriptions.push(
		vscode.window.registerCustomEditorProvider(
			'openPdfWithBrowser.viewer',
			{
				async openCustomDocument(uri: vscode.Uri): Promise<vscode.CustomDocument> {
					return { uri, dispose(): void {} };
				},
				async resolveCustomEditor(
					document: vscode.CustomDocument,
					webviewPanel: vscode.WebviewPanel,
					_token: vscode.CancellationToken
				): Promise<void> {
					// Opening the integrated browser tab makes the browser the active
					// editor, so close THIS tab via its panel, not "closeActiveEditor"
					// (which would close the just-opened browser tab).
					await vscode.commands.executeCommand(
						BROWSER_OPEN,
						document.uri.toString(true)
					);
					webviewPanel.dispose();
				},
			} satisfies vscode.CustomReadonlyEditorProvider,
			{ supportsMultipleEditorsPerDocument: false }
		)
	);
}

function normalizeUri(arg: unknown): vscode.Uri | undefined {
	if (arg instanceof vscode.Uri) {
		return arg;
	}
	if (typeof arg === 'string') {
		try {
			return vscode.Uri.parse(arg, true);
		} catch {
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