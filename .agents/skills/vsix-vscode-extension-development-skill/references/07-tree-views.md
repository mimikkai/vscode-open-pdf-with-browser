## 7. Tree Views

### Basic Tree Data Provider

```typescript
class MyTreeProvider implements vscode.TreeDataProvider<TreeItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<TreeItem | undefined>();
  onDidChangeTreeData = this._onDidChangeTreeData.event;

  refresh() { this._onDidChangeTreeData.fire(undefined); }

  getTreeItem(element: TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: TreeItem): TreeItem[] {
    if (!element) {
      return [
        new TreeItem('Item 1', vscode.TreeItemCollapsibleState.Collapsed),
        new TreeItem('Item 2', vscode.TreeItemCollapsibleState.None),
      ];
    }
    if (element.label === 'Item 1') {
      return [
        new TreeItem('Child 1', vscode.TreeItemCollapsibleState.None),
        new TreeItem('Child 2', vscode.TreeItemCollapsibleState.None),
      ];
    }
    return [];
  }
}

const provider = new MyTreeProvider();
vscode.window.registerTreeDataProvider('myViewId', provider);
```

### Tree View with Commands & Icons

```typescript
class MyItem extends vscode.TreeItem {
  constructor(label: string, collapsible: vscode.TreeItemCollapsibleState) {
    super(label, collapsible);
    this.iconPath = new vscode.ThemeIcon('folder');
    this.command = {
      title: 'Open',
      command: 'myExt.openItem',
      arguments: [this],
    };
    this.contextValue = 'myItem'; // for context menu when clause
  }
}
```

### package.json for Tree Views

```json
{
  "contributes": {
    "viewsContainers": {
      "activitybar": [
        { "id": "myExplorer", "title": "My Explorer", "icon": "media/icon.svg" }
      ]
    },
    "views": {
      "myExplorer": [{ "id": "myViewId", "name": "My View", "icon": "media/view.svg" }],
      "explorer": [{ "id": "myOutline", "name": "My Outline" }]
    },
    "commands": [
      { "command": "myExt.refresh", "title": "Refresh", "icon": "$(refresh)" }
    ],
    "menus": {
      "view/title": [
        { "command": "myExt.refresh", "when": "view == myViewId", "group": "navigation" }
      ],
      "view/item/context": [
        { "command": "myExt.deleteItem", "when": "view == myViewId && viewItem == myItem" }
      ]
    }
  }
}
```

### Tree View with Drag and Drop

```typescript
class DragAndDropProvider implements vscode.TreeDataProvider<MyItem> {
  // ... standard TreeDataProvider methods ...

  dragMimeTypes = ['application/vnd.code.tree.myViewId'];
  dropMimeTypes = ['application/vnd.code.tree.myViewId'];

  handleDrag?(
    source: MyItem[],
    dataTransfer: vscode.DataTransfer,
    token: vscode.CancellationToken
  ): void {
    dataTransfer.set(
      'application/vnd.code.tree.myViewId',
      new vscode.DataTransferItem(source.map(s => s.id))
    );
  }

  handleDrop?(
    target: MyItem | undefined,
    dataTransfer: vscode.DataTransfer,
    token: vscode.CancellationToken
  ): void {
    const data = dataTransfer.get('application/vnd.code.tree.myViewId');
    if (data) {
      // Move items to target
      this._onDidChangeTreeData.fire(undefined);
    }
  }
}

vscode.window.createTreeView('myViewId', {
  treeDataProvider: new DragAndDropProvider(),
  dragAndDropController: { /* ... */ },
});
```
