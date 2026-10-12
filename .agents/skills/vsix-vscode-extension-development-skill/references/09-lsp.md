## 9. Language Server Protocol (LSP)

### Client Setup

```typescript
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
  const serverModule = vscode.Uri.joinPath(context.extensionUri, 'server', 'out', 'server.js');

  const serverOptions: ServerOptions = {
    run: { module: serverModule.fsPath, transport: TransportKind.ipc },
    debug: {
      module: serverModule.fsPath,
      transport: TransportKind.ipc,
      options: { execArgv: ['--nolazy', '--inspect=6009'] }
    }
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'plaintext' }],
    synchronize: {
      fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
    }
  };

  client = new LanguageClient(
    'myLSP',
    'My Language Server',
    serverOptions,
    clientOptions
  );

  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop();
}
```

### Multi-root LSP (Per-folder servers)

```typescript
const clients: Map<string, LanguageClient> = new Map();

export async function activate(context: vscode.ExtensionContext) {
  async function didOpenTextDocument(document: vscode.TextDocument) {
    if (document.languageId !== 'plaintext') { return; }
    const folder = vscode.workspace.getWorkspaceFolder(document.uri);
    if (!folder) { return; }
    if (clients.has(folder.uri.toString())) { return; }

    const client = new LanguageClient(/* ... */);
    client.start();
    clients.set(folder.uri.toString(), client);
  }

  vscode.workspace.onDidOpenTextDocument(didOpenTextDocument);
  vscode.workspace.onDidChangeWorkspaceFolders((event) => {
    for (const removed of event.removed) {
      const client = clients.get(removed.uri.toString());
      if (client) { client.stop(); clients.delete(removed.uri.toString()); }
    }
  });
}
```
