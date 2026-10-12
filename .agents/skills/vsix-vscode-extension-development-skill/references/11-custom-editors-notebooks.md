## 11. Custom Editors & Notebooks

### Custom Text Editor

```typescript
vscode.window.registerCustomEditorProvider(
  'myExt.customEditor',
  {
    resolveCustomTextEditor(document, webviewPanel, token) {
      webviewPanel.webview.options = { enableScripts: true };
      webviewPanel.webview.html = getHtml(document, webviewPanel.webview);

      const changeSubscription = vscode.workspace.onDidChangeTextDocument(
        (e) => {
          if (e.document.uri.toString() === document.uri.toString()) {
            webviewPanel.webview.postMessage({ type: 'update' });
          }
        }
      );

      webviewPanel.onDidDispose(() => changeSubscription.dispose());
    },
  },
  { supportsMultipleEditorsPerDocument: true }
);
```

### package.json for Custom Editor

```json
{
  "contributes": {
    "customEditors": [
      {
        "viewType": "myExt.customEditor",
        "displayName": "My Custom Editor",
        "selector": [
          { "filenamePattern": "*.myext" }
        ],
        "priority": "default"
      }
    ]
  }
}
```

### Notebook Serializer

```typescript
vscode.workspace.registerNotebookSerializer(
  'myNotebook',
  {
    deserializeNotebook(data: Uint8Array) {
      const contents = new TextDecoder().decode(data);
      const cellData: vscode.NotebookCellData[] = [];
      // Parse contents into cells
      return new vscode.NotebookData(cellData);
    },
    serializeNotebook(data: vscode.NotebookData) {
      // Serialize back to file format
      return new Uint8Array(Buffer.from(JSON.stringify(data)));
    }
  },
  { transientOutputs: true }
);
```
