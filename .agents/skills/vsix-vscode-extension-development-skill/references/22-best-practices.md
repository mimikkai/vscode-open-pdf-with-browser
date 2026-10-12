## 22. Best Practices

### Activation & Performance

1. **Use lazy activation**: Prefer `onLanguage:`, `onCommand:`, `onView:` over `*`
2. **Empty `activationEvents` array**: Modern VS Code auto-detects from contributes
3. **Minimize `activate()` work**: Only register providers/commands, defer heavy init
4. **Use `onStartupFinished`** for background tasks that need to run but don't block startup

### Disposables & Memory

1. **Always push to `context.subscriptions`**: Every register* call returns a Disposable
2. **Use DisposableStore for grouped cleanup**: Create multiple subscriptions stores per feature
3. **Singleton pattern for webviews**: Avoid creating duplicate panels
4. **Detach event listeners**: All event listeners pushed to subscriptions auto-dispose

### Commands

1. **Prefix command IDs**: Use extension name as prefix (`myExt.commandName`)
2. **Set `category` in commands**: Groups commands in the Command Palette
3. **Hide internal commands**: Use `"when": "false"` in `commandPalette` menu
4. **Use `when` clauses**: Show commands only in relevant contexts

### Webview

1. **Always use Content Security Policy (CSP)**
2. **Always use nonce for scripts**
3. **Use `asWebviewUri()`** for local resource references
4. **Validate all messages** from webview before acting on them
5. **Post messages** for communication: `panel.webview.postMessage()` / `panel.webview.onDidReceiveMessage()`
6. **Implement `WebviewPanelSerializer`** for panel state persistence across reloads

### MCP & Language Model Tools

1. **Dual declaration**: Declare in `package.json` (metadata) AND register in code (implementation)
2. **`name` must match**: The `name` in `languageModelTools` must match `toolName` in code
3. **Write good `modelDescription`**: This is the prompt that tells the AI when to use your tool
4. **Always handle errors gracefully**: Return `LanguageModelToolResult` with error payload, never throw
5. **Use `Tool` base class pattern**: Template Method simplifies tool development
6. **Use `canBeReferencedInPrompt: true`**: Lets users reference with `#toolName` in chat
7. **Define `inputSchema`**: JSON Schema for structured tool parameters

### Build

1. **Prefer esbuild** over webpack: faster builds, simpler config
2. **Always externalize `vscode`**: Never bundle the vscode module
3. **Use `check-types` + esbuild**: tsc for type checking, esbuild for bundling
4. **Minify for production**: Set `minify: true` in `vscode:prepublish` script

### Testing

1. **Use `@vscode/test-cli`** (newer, simpler) over raw `@vscode/test-electron`
2. **Test activation**: Verify extension activates and commands are registered
3. **Test in Extension Development Host**: Tests run in real VS Code instance
4. **Increase Mocha timeout**: VS Code startup is slow, set `timeout: 20000+`

### Package & Publish

1. **Never commit `node_modules/` or `out/`**: Add to `.gitignore`
2. **Add `.vscode-test/` to `.gitignore`**: Test artifacts
3. **Add `*.vsix` to `.gitignore`**: Built packages
4. **Use `.vscodeignore`**: Exclude test files, source maps, etc. from VSIX package
5. **Set `repository`**: Required for marketplace publishing
