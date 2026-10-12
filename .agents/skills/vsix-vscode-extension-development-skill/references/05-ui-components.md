## 5. UI Components

### Status Bar Item

```typescript
const statusItem = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Right,
  100 // priority: higher = further left/right
);
statusItem.text = '$(megaphone) Hello';
statusItem.command = 'myExt.statusClick';
statusItem.tooltip = 'Click for details';
statusItem.show();

context.subscriptions.push(statusItem);
context.subscriptions.push(
  vscode.window.onDidChangeActiveTextEditor(() => updateStatusBar(statusItem))
);
```

### Notifications

```typescript
// Information
vscode.window.showInformationMessage('Info message');

// With action buttons
const answer = await vscode.window.showInformationMessage(
  'Continue?',
  'Yes', 'No'
);

// Modal (blocks UI)
vscode.window.showInformationMessage('Important!', { modal: true }, 'OK');

// Warning
vscode.window.showWarningMessage('Warning!', 'Fix', 'Ignore');

// Error
vscode.window.showErrorMessage('Error occurred', 'Show Logs');

// Progress notification
vscode.window.withProgress({
  location: vscode.ProgressLocation.Notification,
  title: 'Working...',
  cancellable: true,
}, async (progress, token) => {
  progress.report({ increment: 10, message: 'Step 1' });
  // ...
});

// Window progress (in status bar area)
vscode.window.withProgress({
  location: vscode.ProgressLocation.Window,
  title: 'Indexing',
}, async () => { /* ... */ });
```

### Quick Pick

```typescript
// Simple pick
const result = await vscode.window.showQuickPick(
  ['Option A', 'Option B', 'Option C'],
  { placeHolder: 'Choose an option', canPickMany: false }
);

// Advanced QuickPick with items
const pick = vscode.window.createQuickPick();
pick.items = [
  { label: '$(file) File', description: 'Open a file', detail: 'Open file from disk' },
  { label: '$(folder) Folder', description: 'Open a folder', kind: vscode.QuickPickItemKind.Separator },
  { label: '$(globe) Remote', description: 'Open remote' },
];
pick.onDidChangeSelection(selection => {
  if (selection[0]) {
    vscode.window.showInformationMessage(`Selected: ${selection[0].label}`);
    pick.hide();
  }
});
pick.onDidHide(() => pick.dispose());
pick.show();
```

### Input Box

```typescript
const name = await vscode.window.showInputBox({
  prompt: 'Enter your name',
  placeHolder: 'John Doe',
  value: 'default',
  validateInput: (text) => {
    if (!text || text.length < 3) {
      return 'Name must be at least 3 characters';
    }
    return undefined; // valid
  }
});
```

### Multi-step Input Pattern

```typescript
async function multiStepInput() {
  const title = 'New Project';
  const state: Record<string, string> = {};

  // Step 1: Name
  const name = await vscode.window.showInputBox({
    title, step: 1, totalSteps: 3,
    prompt: 'Project name',
  });
  if (!name) { return; }
  state.name = name;

  // Step 2: Template
  const template = await vscode.window.showQuickPick(
    ['basic', 'react', 'vue'],
    { title, step: 2, totalSteps: 3 }
  );
  if (!template) { return; }
  state.template = template;

  // Step 3: Location
  const folder = await vscode.window.showOpenDialog({
    title, step: 3, totalSteps: 3,
    canSelectFolders: true,
  });
  // ...
}
```
