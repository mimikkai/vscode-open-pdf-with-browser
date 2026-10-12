## Decision Helper: Which APIs Do I Need?

| I want to... | Use these APIs |
|---|---|
| Run code on command | `commands.registerCommand` + `contributes.commands` |
| Show UI messages/picks | `window.showInformationMessage`, `showQuickPick`, `showInputBox` |
| Add status bar item | `window.createStatusBarItem` |
| Add sidebar tree view | `TreeDataProvider` + `contributes.views` |
| Show custom HTML UI | `window.createWebviewPanel` or `WebviewViewProvider` |
| Provide completions | `languages.registerCompletionItemProvider` |
| Show inline code lenses | `languages.registerCodeLensProvider` |
| Add QuickFix/code actions | `languages.registerCodeActionProvider` |
| Show errors/warnings | `languages.createDiagnosticCollection` |
| Provide hover info | `languages.registerHoverProvider` |
| Go to definition | `languages.registerDefinitionProvider` |
| Syntax highlighting | `contributes.grammars` + TextMate grammar |
| Semantic highlighting | `languages.registerDocumentSemanticTokensProvider` |
| Code folding | `contributes.languages` + `language-configuration.json` |
| Snippets | `contributes.snippets` + snippet JSON |
| Settings | `contributes.configuration` + `workspace.getConfiguration` |
| Custom file editor | `window.registerCustomEditorProvider` + `contributes.customEditors` |
| Notebook support | `workspace.registerNotebookSerializer` + `contributes.notebooks` |
| Virtual filesystem | `workspace.registerFileSystemProvider` |
| Source control integration | `scm.createSourceControl` |
| Handle URIs from browser | `window.registerUriHandler` |
| Auth/OAuth | `authentication.registerAuthenticationProvider` |
| Make AI tools (MCP) | `vscode.lm.registerTool` + `contributes.languageModelTools` |
| AI chat participant | `chat.createChatParticipant` + `contributes.chatParticipants` |
| AI model provider | `lm.registerLanguageModelChatProvider` + `contributes.languageModelChatProviders` |
| Language server (LSP) | `vscode-languageclient` + separate server process |
| Color theme | `contributes.themes` + `.tmTheme` file |
| File icons | `contributes.iconThemes` |
| Telemetry | `env.createTelemetryLogger` |
| Localization | `l10n.t()` + `contributes.l10n` |
| Proposed API | `enabledApiProposals` array + `@vscode/dts` |
