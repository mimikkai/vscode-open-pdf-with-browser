## 12. File System Providers

### Virtual File System

```typescript
class MemFS implements vscode.FileSystemProvider {
  private _emitter = new vscode.EventEmitter<vscode.FileChangeEvent[]>();
  onDidChangeFile = this._emitter.event;

  private root = new Entry('', vscode.FileType.Directory);

  stat(uri: vscode.Uri): vscode.FileStat { /* return stat */ }
  readDirectory(uri: vscode.Uri): [string, vscode.FileType][] { /* list dir */ }
  readFile(uri: vscode.Uri): Uint8Array { /* read file */ }
  writeFile(uri: vscode.Uri, content: Uint8Array, opts: vscode.FileWriteOptions) { /* write */ }
  createDirectory(uri: vscode.Uri) { /* mkdir */ }
  delete(uri: vscode.Uri, opts: vscode.FileDeleteOptions) { /* delete */ }
  rename(oldUri: vscode.Uri, newUri: vscode.Uri, opts: vscode.FileRenameOptions) { /* rename */ }
  watch(uri: vscode.Uri, opts: vscode.FileWatchOptions): vscode.Disposable {
    return new vscode.Disposable(() => {});
  }
}

context.subscriptions.push(
  vscode.workspace.registerFileSystemProvider('memfs', new MemFS(), { isCaseSensitive: true })
);
```
