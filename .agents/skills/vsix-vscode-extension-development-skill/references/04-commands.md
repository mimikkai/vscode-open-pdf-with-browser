## 4. Commands

### Basic Command

```typescript
const disposable = vscode.commands.registerCommand(
  'myExtension.helloWorld',
  () => {
    vscode.window.showInformationMessage('Hello World!');
  }
);
context.subscriptions.push(disposable);
```

### Command with Arguments

```typescript
// In package.json: "command": "myExt.openFile"
// Invoked via: vscode.commands.executeCommand('myExt.openFile', uri)
vscode.commands.registerCommand('myExt.openFile', (uri: vscode.Uri) => {
  vscode.window.showTextDocument(uri);
});
```

### Text Editor Command

```typescript
// Gets active textEditor automatically, disabled if no editor
vscode.commands.registerTextEditorCommand('myExt.reverseWord', (editor, edit) => {
  const selection = editor.selection;
  const text = editor.document.getText(selection);
  editor.edit(editBuilder => {
    editBuilder.replace(selection, text.split('').reverse().join(''));
  });
});
```

### Command with Progress

```typescript
vscode.commands.registerCommand('myExt.process', async () => {
  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: 'Processing...',
      cancellable: true,
    },
    async (progress, token) => {
      token.onCancellationRequested(() => {
        vscode.window.showInformationMessage('Cancelled');
      });
      for (let i = 0; i < 100; i++) {
        if (token.isCancellationRequested) { break; }
        progress.report({ message: `Step ${i + 1}`, increment: 1 });
        await new Promise(r => setTimeout(r, 50));
      }
    }
  );
});
```

### package.json Command Contribution

```json
{
  "contributes": {
    "commands": [
      {
        "command": "myExt.hello",
        "title": "Say Hello",
        "category": "My Extension",
        "icon": {
          "light": "resources/light/icon.svg",
          "dark": "resources/dark/icon.svg"
        }
      }
    ]
  }
}
```

### Menu Context (when clause)

```json
{
  "contributes": {
    "menus": {
      "editor/context": [
        {
          "command": "myExt.hello",
          "when": "editorHasSelection && resourceExtname == .ts",
          "group": "myGroup@1"
        }
      ],
      "commandPalette": [
        {
          "command": "myExt.internalCmd",
          "when": "false"
        }
      ]
    }
  }
}
```

Common `when` clause keys:
- `editorHasSelection`, `editorFocus`, `editorTextFocus`
- `resourceExtname`, `resourceLangId`, `resourceFilename`
- `view == myViewId`, `viewItem =~ /itemType/`
- `isInDiffEditor`, `isInEmbeddedEditor`
