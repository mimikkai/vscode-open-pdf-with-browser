## 3. Activation & Lifecycle

### Activation Events (Modern Approach)

In modern VS Code (1.74+), `activationEvents` can be omitted or set to `[]`. VS Code auto-detects activation from `contributes`. Only use explicit events when you need non-standard activation.

### Available Activation Events

```json
{
  "activationEvents": [
    "*",                                    // Always activate (AVOID unless necessary)
    "onLanguage:javascript",                 // Language file opened
    "onCommand:myExt.myCmd",                 // Command invoked
    "onDebug",                                // Debug session starts
    "onDebugResolve:type",                   // Debug resolve
    "onDebugInitialConfigurations",          // Debug configs requested
    "onFileSystem:scheme",                   // FS scheme accessed
    "onView:viewId",                         // View opened
    "onWebviewPanel:viewType",              // Webview panel opened
    "onUri:myExt",                           // URI handler invoked
    "onNotebook:type",                       // Notebook opened
    "workspaceContains:.eslintrc",           // File exists in workspace
    "onStartupFinished"                      // After VS Code fully loaded
  ]
}
```

### Activation Best Practices

| Pattern | When to Use | Example |
|---|---|---|
| `[]` (empty, auto) | Default for most extensions | Commands, views, themes, configs |
| `onLanguage:` | Language features | LSP, completions, diagnostics |
| `onCommand:` | Only when command is not in `contributes` | Dynamic commands |
| `onStartupFinished` | Background tasks that should not slow startup | Indexing, polling |
| `*` | ONLY when absolutely necessary | Status bar, global event listeners |

### activate() / deactivate()

```typescript
export function activate(context: vscode.ExtensionContext) {
  // All disposables must go into context.subscriptions
  context.subscriptions.push(
    vscode.commands.registerCommand('myExt.hello', () => {
      vscode.window.showInformationMessage('Hello!');
    })
  );
}

export function deactivate() {
  // Only needed for async cleanup.
  // context.subscriptions handles synchronous disposal automatically.
  // Return a Thenable<string> | void for async cleanup.
}
```
