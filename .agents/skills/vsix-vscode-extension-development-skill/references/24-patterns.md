## 24. Common Patterns Reference

### Disposable Registration Pattern

```typescript
// Always push to context.subscriptions
context.subscriptions.push(
  vscode.commands.registerCommand('cmd', () => {}),
  vscode.languages.registerCompletionItemProvider(sel, provider),
  vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right),
  vscode.workspace.onDidChangeConfiguration(handler),
);
```

### Singleton Webview Panel Pattern

```typescript
class MyPanel {
  private static currentPanel: MyPanel | undefined;
  public static readonly viewType = 'myPanel';

  public static createOrShow(context: vscode.ExtensionContext) {
    if (MyPanel.currentPanel) {
      MyPanel.currentPanel._panel.reveal();
      return;
    }
    MyPanel.currentPanel = new MyPanel(context);
  }

  private constructor(context: vscode.ExtensionContext) { /* ... */ }
  public dispose() { MyPanel.currentPanel = undefined; /* cleanup */ }
}
```

### Event-Driven Update Pattern

```typescript
class MyProvider implements vscode.TreeDataProvider<MyItem> {
  private _onDidChange = new vscode.EventEmitter<MyItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChange.event;

  refresh() { this._onDidChange.fire(undefined); }

  // ... getTreeItem, getChildren
}

// External trigger to refresh
vscode.commands.registerCommand('myExt.refresh', () => provider.refresh());
```

### Provider Registration Pattern

```typescript
export function register(context: vscode.ExtensionContext) {
  const provider = new MyProvider(context);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(MyProvider.viewType, provider)
  );
  return provider;
}
```

### Configuration Watcher Pattern

```typescript
let configuredValue: string;
function updateConfig() {
  configuredValue = vscode.workspace.getConfiguration('myExt').get('setting', 'default');
}
updateConfig();

context.subscriptions.push(
  vscode.workspace.onDidChangeConfiguration(e => {
    if (e.affectsConfiguration('myExt')) {
      updateConfig();
    }
  })
);
```

### Document Change Watcher Pattern

```typescript
function updateOnDocumentChange(document: vscode.TextDocument) {
  if (document.languageId !== 'typescript') { return; }
  // Update diagnostics, decorations, etc.
}

context.subscriptions.push(
  vscode.window.onDidChangeActiveTextEditor(e => {
    if (e) { updateOnDocumentChange(e.document); }
  }),
  vscode.workspace.onDidChangeTextDocument(e => {
    updateOnDocumentChange(e.document);
  }),
);
```

### Secret Storage Pattern

```typescript
export function activate(context: vscode.ExtensionContext) {
  // Secret storage is per-extension, persisted securely
  const { secrets } = context;

  await secrets.store('apiToken', 'my-secret-token');
  const token = await secrets.get('apiToken');
  await secrets.delete('apiToken');

  context.subscriptions.push(
    secrets.onDidChange(e => {
      if (e.key === 'apiToken') {
        // React to token changes
      }
    })
  );
}
```

### Global State Pattern

```typescript
export function activate(context: vscode.ExtensionContext) {
  const { globalState } = context;

  await globalState.update('lastOpenTime', Date.now());
  const lastOpen = globalState.get<number>('lastOpenTime', 0);
}
```

### Codicon Reference

Common codicons used in extensions:
- `$(file)`, `$(folder)`, `$(folder-opened)`
- `$(search)`, `$(refresh)`, `$(add)`, `$(remove)`
- `$(play)`, `$(stop)`, `$(debug-start)`
- `$(check)`, `$(error)`, `$(warning)`, `$(info)`
- `$(settings-gear)`, `$(terminal)`, `$(git-branch)`
- `$(rocket)`, `$(star)`, `$(heart)`, `$(megaphone)`

Full list: https://code.visualstudio.com/api/references/icons-in-labels
