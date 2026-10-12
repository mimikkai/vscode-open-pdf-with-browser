## 8. Webview

### Webview Panel (Singleton Pattern)

```typescript
class MyWebviewPanel {
  public static currentPanel: MyWebviewPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  public static createOrShow(context: vscode.ExtensionContext) {
    if (MyWebviewPanel.currentPanel) {
      MyWebviewPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
      return;
    }
    MyWebviewPanel.currentPanel = new MyWebviewPanel(context);
  }

  private constructor(context: vscode.ExtensionContext) {
    this._panel = vscode.window.createWebviewPanel(
      'myWebview',
      'My Panel',
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [
          vscode.Uri.joinPath(context.extensionUri, 'media'),
        ],
      }
    );

    this._panel.webview.html = this._getHtmlForWebview(this._panel.webview, context);

    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    this._panel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case 'alert':
            vscode.window.showInformationMessage(message.text);
            return;
        }
      },
      null,
      this._disposables
    );
  }

  public dispose() {
    MyWebviewPanel.currentPanel = undefined;
    this._panel.dispose();
    while (this._disposables.length) {
      this._disposables.pop()?.dispose();
    }
  }

  private _getHtmlForWebview(webview: vscode.Webview, context: vscode.ExtensionContext): string {
    const nonce = getNonce();
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(context.extensionUri, 'media', 'main.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(context.extensionUri, 'media', 'style.css')
    );

    return `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none';
                style-src ${webview.cspSource} 'nonce-${nonce}';
                script-src 'nonce-${nonce}';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="${styleUri}" rel="stylesheet">
  <title>My Panel</title>
</head>
<body>
  <h1>Hello Webview</h1>
  <button id="btn">Click Me</button>
  <script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
  }
}

function getNonce(): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
```

### Webview Sidebar View

```typescript
class MyViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'myExt.myView';
  private _view?: vscode.WebviewView;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };
    webviewView.webview.html = this._getHtml();

    webviewView.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case 'add':
          // Handle add
          break;
      }
    });
  }

  public addColor() {
    if (this._view) {
      this._view.webview.postMessage({ type: 'addColor' });
    }
  }
}
```

### package.json for Webview View

```json
{
  "contributes": {
    "views": {
      "explorer": [{ "type": "webview", "id": "myExt.myView", "name": "My View" }]
    },
    "commands": [
      { "command": "myExt.addColor", "title": "Add Color" }
    ],
    "menus": {
      "view/title": [
        { "command": "myExt.addColor", "when": "view == myExt.myView", "group": "navigation" }
      ]
    }
  }
}
```

### Webview Security Best Practices

1. **Always use CSP**: `default-src 'none'` + specific allowed sources
2. **Always use nonce**: Random nonce per webview creation for inline scripts
3. **Use `asWebviewUri()`**: Never use direct file paths for local resources
4. **Validate messages**: Always validate data from `onDidReceiveMessage`
5. **Never trust webview input**: Sanitize all data before using in extension
