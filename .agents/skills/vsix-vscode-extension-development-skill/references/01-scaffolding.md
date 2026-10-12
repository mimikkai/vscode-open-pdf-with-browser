## 1. Project Structure & Scaffolding

### Minimal Extension Structure

```
my-extension/
  .vscode/
    launch.json          # F5 debug configuration
    tasks.json            # Build task (npm: watch)
  src/
    extension.ts          # Entry point: activate() / deactivate()
  package.json            # Extension manifest
  tsconfig.json           # TypeScript config
  .gitignore              # out, node_modules, .vscode-test/, *.vsix
```

### Extension with Multiple Modules

```
my-extension/
  src/
    extension.ts          # activate(), delegates to modules
    commands/
      myCommand.ts
    providers/
      myProvider.ts
    tools/
      tool.ts             # Abstract MCP tool base
      myTool.ts           # Concrete tool
  package.json
  tsconfig.json
```

### LSP Extension Structure

```
my-lsp-extension/
  client/
    src/
      extension.ts        # LanguageClient setup
    package.json
    tsconfig.json
  server/
    src/
      server.ts            # Language server implementation
    package.json
    tsconfig.json
  package.json             # Root: postinstall runs both client & server installs
```

### Scaffolding with yo code

```bash
npm install -g yo generator-code
yo code
# Choose: New Extension (TypeScript), New Extension (JavaScript),
#         New Color Theme, New Language Support, New Code Snippets, etc.
```
