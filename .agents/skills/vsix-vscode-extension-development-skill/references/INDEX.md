# Samples Index

Navigation for `vscode-extension-samples/` — trimmed microsoft/vscode-extension-samples (MIT).
Per-topic guide files live one level up (`../NN-*.md`, see `../INDEX` routing in SKILL.md).

## By Topic

| Topic | Samples |
|---|---|
| Scaffolding / hello world | `helloworld-sample`, `helloworld-minimal-sample`, `helloworld-web-sample` |
| Commands, menus, status bar | `helloworld-sample`, `statusbar-sample` |
| Activation & progress | `progress-sample`, `welcome-view-content-sample` |
| Multi-root, file ops, editing | `basic-multi-root-sample`, `document-editing-sample`, `document-paste`, `drop-on-document` |
| UI: quick pick, decorations, comments | `quickinput-sample`, `decorator-sample`, `comment-sample` |
| Tree views | `tree-view-sample`, `tabs-api-sample` |
| Webviews | `webview-sample`, `webview-codicons-sample`, `webview-view-sample` |
| Custom editors | `custom-editor-sample` |
| Language features (single-file providers) | `completions-sample`, `code-actions-sample`, `codelens-sample`, `call-hierarchy-sample`, `semantic-tokens-sample`, `diagnostic-related-information-sample`, `contentprovider-sample`, `virtual-document-sample`, `custom-data-sample`, `language-configuration-sample`, `snippet-sample`, `inline-completions` |
| Language servers (LSP) | `lsp-sample`, `lsp-multi-server-sample`, `lsp-web-extension-sample`, `lsp-log-streaming-sample`, `lsp-user-input-sample`, `lsp-embedded-language-service`, `lsp-embedded-request-forwarding` |
| MCP tools & chat | `mcp-extension-sample`, `chat-sample`, `chat-tutorial`, `lm-api-tutorial`, `chat-context-sample`, `chat-output-renderer-sample`, `chat-model-provider-sample` |
| Notebooks | `notebook-serializer-sample`, `notebook-renderer-sample`, `notebook-renderer-react-sample`, `notebook-format-code-action-sample`, `notebook-extend-markdown-renderer-sample` |
| File system providers | `fsprovider-sample`, `fsconsumer-sample`, `nodefs-provider-sample` |
| Authentication | `authenticationprovider-sample`, `github-authentication-sample` |
| Configuration, l10n, telemetry | `configuration-sample`, `l10n-sample`, `telemetry-sample` |
| Tasks, terminals, shell integration | `task-provider-sample`, `terminal-sample`, `extension-terminal-sample`, `shell-integration-sample` |
| Testing | `helloworld-test-sample`, `helloworld-test-cli-sample`, `test-provider-sample` |
| Bundling | `esbuild-sample`, `webpack-sample` |
| SCM, theming, misc | `source-control-sample`, `theme-sample`, `product-icon-theme-sample`, `getting-started-sample`, `uri-handler-sample`, `vim-sample`, `proposed-api-sample`, `notifications-sample` |
| WASM | `wasm-component-model`, `wasm-component-model-async`, `wasm-component-model-resource`, `wasm-language-server` |

## Official Sample Tables (microsoft/vscode-extension-samples README)

Verbatim from upstream README: sample → guide on code.visualstudio.com → covered APIs / contribution points.
Sample links point to the local copy in `vscode-extension-samples/`.

<!-- SAMPLES_BEGIN -->
| Sample | Guide on VS Code Website | API & Contribution |
| ------ | ----- | --- |
| [Webview Sample](webview-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/webview-sample)) | [/api/extension-guides/webview](https://code.visualstudio.com/api/extension-guides/webview) | [window.createWebviewPanel](https://code.visualstudio.com/api/references/vscode-api#window.createWebviewPanel)<br>[window.registerWebviewPanelSerializer](https://code.visualstudio.com/api/references/vscode-api#window.registerWebviewPanelSerializer) |
| [Webview View Sample](webview-view-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/webview-view-sample)) | N/A | [window.registerWebviewViewProvider](https://code.visualstudio.com/api/references/vscode-api#window.registerWebviewViewProvider) |
| [Webview Codicons Sample](webview-codicons-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/webview-codicons-sample)) | N/A |  |
| [Status Bar Sample](statusbar-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/statusbar-sample)) | N/A | [window.createStatusBarItem](https://code.visualstudio.com/api/references/vscode-api#window.createStatusBarItem)<br>[StatusBarItem](https://code.visualstudio.com/api/references/vscode-api#StatusBarItem) |
| [Tree View Sample](tree-view-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/tree-view-sample)) | [/api/extension-guides/tree-view](https://code.visualstudio.com/api/extension-guides/tree-view) | [window.createTreeView](https://code.visualstudio.com/api/references/vscode-api#window.createTreeView)<br>[window.registerTreeDataProvider](https://code.visualstudio.com/api/references/vscode-api#window.registerTreeDataProvider)<br>[TreeView](https://code.visualstudio.com/api/references/vscode-api#TreeView)<br>[TreeDataProvider](https://code.visualstudio.com/api/references/vscode-api#TreeDataProvider)<br>[contributes.views](https://code.visualstudio.com/api/references/contribution-points#contributes.views)<br>[contributes.viewsContainers](https://code.visualstudio.com/api/references/contribution-points#contributes.viewsContainers) |
| [Task Provider Sample](task-provider-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/task-provider-sample)) | [/api/extension-guides/task-provider](https://code.visualstudio.com/api/extension-guides/task-provider) | [tasks.registerTaskProvider](https://code.visualstudio.com/api/references/vscode-api#tasks.registerTaskProvider)<br>[Task](https://code.visualstudio.com/api/references/vscode-api#Task)<br>[ShellExecution](https://code.visualstudio.com/api/references/vscode-api#ShellExecution)<br>[contributes.taskDefinitions](https://code.visualstudio.com/api/references/contribution-points#contributes.taskDefinitions) |
| [Multi Root Sample](basic-multi-root-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/basic-multi-root-sample)) | N/A | [workspace.getWorkspaceFolder](https://code.visualstudio.com/api/references/vscode-api#workspace.getWorkspaceFolder)<br>[workspace.onDidChangeWorkspaceFolders](https://code.visualstudio.com/api/references/vscode-api#workspace.onDidChangeWorkspaceFolders) |
| [Completion Provider Sample](completions-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/completions-sample)) | N/A | [languages.registerCompletionItemProvider](https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider)<br>[CompletionItem](https://code.visualstudio.com/api/references/vscode-api#CompletionItem)<br>[SnippetString](https://code.visualstudio.com/api/references/vscode-api#SnippetString) |
| [Code Actions Sample](code-actions-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/code-actions-sample)) | N/A | [languages.registerCodeActionsProvider](https://code.visualstudio.com/api/references/vscode-api#languages.registerCodeActionsProvider)<br>[CodeActionProvider](https://code.visualstudio.com/api/references/vscode-api#CodeActionProvider) |
| [File System Provider Sample](fsprovider-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/fsprovider-sample)) | N/A | [workspace.registerFileSystemProvider](https://code.visualstudio.com/api/references/vscode-api#workspace.registerFileSystemProvider) |
| [Editor Decorator Sample](decorator-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/decorator-sample)) | N/A | [TextEditor.setDecorations](https://code.visualstudio.com/api/references/vscode-api#TextEditor.setDecorations)<br>[DecorationOptions](https://code.visualstudio.com/api/references/vscode-api#DecorationOptions)<br>[DecorationInstanceRenderOptions](https://code.visualstudio.com/api/references/vscode-api#DecorationInstanceRenderOptions)<br>[ThemableDecorationInstanceRenderOptions](https://code.visualstudio.com/api/references/vscode-api#ThemableDecorationInstanceRenderOptions)<br>[window.createTextEditorDecorationType](https://code.visualstudio.com/api/references/vscode-api#window.createTextEditorDecorationType)<br>[TextEditorDecorationType](https://code.visualstudio.com/api/references/vscode-api#TextEditorDecorationType)<br>[contributes.colors](https://code.visualstudio.com/api/references/contribution-points#contributes.colors) |
| [L10n Sample](l10n-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/l10n-sample)) | N/A |  |
| [Terminal Sample](terminal-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/terminal-sample)) | N/A | [window.createTerminal](https://code.visualstudio.com/api/references/vscode-api#window.createTerminal)<br>[window.onDidChangeActiveTerminal](https://code.visualstudio.com/api/references/vscode-api#window.onDidChangeActiveTerminal)<br>[window.onDidCloseTerminal](https://code.visualstudio.com/api/references/vscode-api#window.onDidCloseTerminal)<br>[window.onDidOpenTerminal](https://code.visualstudio.com/api/references/vscode-api#window.onDidOpenTerminal)<br>[window.Terminal](https://code.visualstudio.com/api/references/vscode-api#window.Terminal)<br>[window.terminals](https://code.visualstudio.com/api/references/vscode-api#window.terminals) |
| [Extension Terminal Sample](extension-terminal-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/extension-terminal-sample)) | N/A | [window.createTerminal](https://code.visualstudio.com/api/references/vscode-api#window.createTerminal)<br>[window.Pseudoterminal](https://code.visualstudio.com/api/references/vscode-api#window.Pseudoterminal)<br>[window.ExtensionTerminalOptions](https://code.visualstudio.com/api/references/vscode-api#window.ExtensionTerminalOptions) |
| [Color Theme Sample](theme-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/theme-sample)) | [/api/extension-guides/color-theme](https://code.visualstudio.com/api/extension-guides/color-theme) | [contributes.themes](https://code.visualstudio.com/api/references/contribution-points#contributes.themes) |
| [Product Icon Theme Sample](product-icon-theme-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/product-icon-theme-sample)) | [/api/extension-guides/product-icon-theme](https://code.visualstudio.com/api/extension-guides/product-icon-theme) | [contributes.productIconThemes](https://code.visualstudio.com/api/references/contribution-points#contributes.productIconThemes) |
| [Vim Sample](vim-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/vim-sample)) | N/A | [commands](https://code.visualstudio.com/api/references/vscode-api#commands)<br>[StatusBarItem](https://code.visualstudio.com/api/references/vscode-api#StatusBarItem)<br>[window.createStatusBarItem](https://code.visualstudio.com/api/references/vscode-api#window.createStatusBarItem)<br>[TextEditorCursorStyle](https://code.visualstudio.com/api/references/vscode-api#TextEditorCursorStyle)<br>[window.activeTextEditor](https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor)<br>[Position](https://code.visualstudio.com/api/references/vscode-api#Position)<br>[Range](https://code.visualstudio.com/api/references/vscode-api#Range)<br>[Selection](https://code.visualstudio.com/api/references/vscode-api#Selection)<br>[TextEditor](https://code.visualstudio.com/api/references/vscode-api#TextEditor)<br>[TextEditorRevealType](https://code.visualstudio.com/api/references/vscode-api#TextEditorRevealType)<br>[TextDocument](https://code.visualstudio.com/api/references/vscode-api#TextDocument) |
| [webpack-sample](webpack-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/webpack-sample)) | [/api/working-with-extensions/bundling-extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension) |  |
| [esbuild-sample](esbuild-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/esbuild-sample)) | [/api/working-with-extensions/bundling-extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension) |  |
| [Source Control Sample](source-control-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/source-control-sample)) | [/api/extension-guides/scm-provider](https://code.visualstudio.com/api/extension-guides/scm-provider) | [workspace.workspaceFolders](https://code.visualstudio.com/api/references/vscode-api#workspace.workspaceFolders)<br>[SourceControl](https://code.visualstudio.com/api/references/vscode-api#SourceControl)<br>[SourceControlResourceGroup](https://code.visualstudio.com/api/references/vscode-api#SourceControlResourceGroup)<br>[scm.createSourceControl](https://code.visualstudio.com/api/references/vscode-api#scm.createSourceControl)<br>[TextDocumentContentProvider](https://code.visualstudio.com/api/references/vscode-api#TextDocumentContentProvider)<br>[contributes.menus](https://code.visualstudio.com/api/references/contribution-points#contributes.menus) |
| [Commenting API Sample](comment-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/comment-sample)) | N/A |  |
| [Document Editing Sample](document-editing-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/document-editing-sample)) | N/A | [commands](https://code.visualstudio.com/api/references/vscode-api#commands) |
| [Custom Data Sample](custom-data-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/custom-data-sample)) | [/api/extension-guides/custom-data-extension](https://code.visualstudio.com/api/extension-guides/custom-data-extension) |  |
| [CodeLens Provider Sample](codelens-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/codelens-sample)) | N/A | [languages.registerCodeLensProvider](https://code.visualstudio.com/api/references/vscode-api#languages.registerCodeLensProvider)<br>[CodeLensProvider](https://code.visualstudio.com/api/references/vscode-api#CodeLensProvider)<br>[CodeLens](https://code.visualstudio.com/api/references/vscode-api#CodeLens) |
| [Call Hierarchy Sample](call-hierarchy-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/call-hierarchy-sample)) | N/A | [languages.registerCallHierarchyProvider](https://code.visualstudio.com/api/references/vscode-api#languages.registerCallHierarchyProvider)<br>[CallHierarchyProvider](https://code.visualstudio.com/api/references/vscode-api#CallHierarchyProvider)<br>[CallHierarchyItem](https://code.visualstudio.com/api/references/vscode-api#CallHierarchyItem)<br>[CallHierarchyOutgoingCall](https://code.visualstudio.com/api/references/vscode-api#CallHierarchyOutgoingCall)<br>[CallHierarchyIncomingCall](https://code.visualstudio.com/api/references/vscode-api#CallHierarchyIncomingCall) |
| [Custom Editors Sample](custom-editor-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample)) | [/api/extension-guides/custom-editors](https://code.visualstudio.com/api/extension-guides/custom-editors) | [window.registerCustomEditorProvider](https://code.visualstudio.com/api/references/vscode-api#window.registerCustomEditorProvider)<br>[CustomTextEditorProvider](https://code.visualstudio.com/api/references/vscode-api#CustomTextEditorProvider)<br>[contributes.customEditors](https://code.visualstudio.com/api/references/contribution-points#contributes.customEditors) |
| [Semantic tokens](semantic-tokens-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/semantic-tokens-sample)) | [/api/language-extensions/semantic-highlight-guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide) | [languages.registerDocumentSemanticTokensProvider](https://code.visualstudio.com/api/references/vscode-api#languages.registerDocumentSemanticTokensProvider)<br>[vscode.DocumentSemanticTokensProvider](https://code.visualstudio.com/api/references/vscode-api#vscode.DocumentSemanticTokensProvider) |
| [Test Provider Sample](test-provider-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/test-provider-sample)) | N/A |  |
| [Getting Started Sample](getting-started-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/getting-started-sample)) | N/A |  |
| [notebook-renderer-sample](notebook-renderer-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/notebook-renderer-sample)) | [/api/extension-guides/notebook#notebook-renderer](https://code.visualstudio.com/api/extension-guides/notebook#notebook-renderer) | [contributes.notebookRenderer](https://code.visualstudio.com/api/references/contribution-points#contributes.notebookRenderer) |
| [notebook-extend-markdown-renderer-sample](notebook-extend-markdown-renderer-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/notebook-extend-markdown-renderer-sample)) | [/api/extension-guides/notebook#notebook-renderer](https://code.visualstudio.com/api/extension-guides/notebook#notebook-renderer) | [contributes.notebookRenderer](https://code.visualstudio.com/api/references/contribution-points#contributes.notebookRenderer) |
| [jupyter-server-provider-sample](jupyter-server-provider-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/jupyter-server-provider-sample)) | N/A |  |
| [Chat Sample](chat-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/chat-sample)) | N/A |  |
| [Chat Tutorial](chat-tutorial) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/chat-tutorial)) | N/A |  |
| [Notifications Sample](notifications-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/notifications-sample)) | N/A |  |
<!-- SAMPLES_END -->

### Language Server Protocol Samples

<!-- LSP_SAMPLES_BEGIN -->
| Sample | Guide on VS Code Website | API & Contribution |
| ------ | ----- | --- |
| [Snippet Sample](snippet-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/snippet-sample)) | [/api/language-extensions/snippet-guide](https://code.visualstudio.com/api/language-extensions/snippet-guide) | [contributes.snippets](https://code.visualstudio.com/api/references/contribution-points#contributes.snippets) |
| [Language Configuration Sample](language-configuration-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/language-configuration-sample)) | [/api/language-extensions/language-configuration-guide](https://code.visualstudio.com/api/language-extensions/language-configuration-guide) | [contributes.languages](https://code.visualstudio.com/api/references/contribution-points#contributes.languages) |
| [LSP Sample](lsp-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-sample)) | [/api/language-extensions/language-server-extension-guide](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide) |  |
| [LSP Log Streaming Sample](lsp-log-streaming-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-log-streaming-sample)) | N/A |  |
| [LSP Multi Root Server Sample](lsp-multi-server-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-multi-server-sample)) | https://github.com/Microsoft/vscode/wiki/Extension-Authoring:-Adopting-Multi-Root-Workspace-APIs#language-client--language-server |  |
| [LSP Web Extension Sample](lsp-web-extension-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-web-extension-sample)) | [/api/language-extensions/language-server-extension-guide](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide) |  |
| [LSP User Input Sample](lsp-user-input-sample) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-user-input-sample)) | N/A |  |
| [LSP Embedded Language Service](lsp-embedded-language-service) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-embedded-language-service)) | N/A |  |
| [LSP Embedded Request Forwarding](lsp-embedded-request-forwarding) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-embedded-request-forwarding)) | N/A |  |
| [Wasm language server](wasm-language-server) ([upstream](https://github.com/microsoft/vscode-extension-samples/tree/main/wasm-language-server)) | N/A |  |
<!-- LSP_SAMPLES_END -->
## All Samples

Format: sample — TS LOC — source files. Path prefix for every file below: `vscode-extension-samples/<sample>/`.

| Sample | TS LOC | Source files |
|---|---|---|
| [`authenticationprovider-sample`](authenticationprovider-sample) | 195 | `src/authProvider.ts`, `src/extension.ts` — see: Authentication |
| [`basic-multi-root-sample`](basic-multi-root-sample) | 72 | `src/extension.ts` — see: Multi-root, file ops, editing |
| [`call-hierarchy-sample`](call-hierarchy-sample) | 236 | `src/model.ts`, `src/FoodPyramidHierarchyProvider.ts`, `src/extension.ts` — see: Language features (single-file providers) |
| [`chat-context-sample`](chat-context-sample) | 46 | `src/extension.ts` — see: MCP tools & chat |
| [`chat-model-provider-sample`](chat-model-provider-sample) | 46 | `src/provider.ts`, `src/extension.ts` — see: MCP tools & chat |
| [`chat-output-renderer-sample`](chat-output-renderer-sample) | 300 | `src/extension.ts` — see: MCP tools & chat |
| [`chat-sample`](chat-sample) | 873 | `src/toolsPrompt.tsx`, `src/tools.ts`, `src/chatUtilsSample.ts`, `src/simple.ts`, `src/play.tsx`, `src/toolParticipant.ts`, `src/extension.ts` — see: MCP tools & chat |
| [`chat-tutorial`](chat-tutorial) | 61 | `src/extension.ts` — see: MCP tools & chat |
| [`code-actions-sample`](code-actions-sample) | 173 | `src/diagnostics.ts`, `src/extension.ts` — see: Language features (single-file providers) |
| [`codelens-sample`](codelens-sample) | 90 | `src/extension.ts`, `src/CodelensProvider.ts` — see: Language features (single-file providers) |
| [`comment-sample`](comment-sample) | 142 | `src/extension.ts` — see: UI: quick pick, decorations, comments |
| [`completions-sample`](completions-sample) | 74 | `src/extension.ts` — see: Language features (single-file providers) |
| [`configuration-sample`](configuration-sample) | 224 | `src/extension.ts` — see: Configuration, l10n, telemetry |
| [`contentprovider-sample`](contentprovider-sample) | 243 | `src/referencesDocument.ts`, `src/provider.ts`, `src/extension.ts` — see: Language features (single-file providers) |
| [`custom-data-sample`](custom-data-sample) | 0 | `css.css-data.json`, `html.html-data.json` (JSON data, no TS) — see: Language features (single-file providers) |
| [`custom-editor-sample`](custom-editor-sample) | 714 | `src/pawDrawEditor.ts`, `src/catScratchEditor.ts`, `src/util.ts`, `src/extension.ts`, `src/dispose.ts` — see: Custom editors |
| [`decorator-sample`](decorator-sample) | 88 | `src/extension.ts` — see: UI: quick pick, decorations, comments |
| [`diagnostic-related-information-sample`](diagnostic-related-information-sample) | 32 | `src/extension.ts` — see: Language features (single-file providers) |
| [`document-editing-sample`](document-editing-sample) | 21 | `src/extension.ts` — see: Multi-root, file ops, editing |
| [`document-paste`](document-paste) | 84 | `src/extension.ts` — see: Multi-root, file ops, editing |
| [`drop-on-document`](drop-on-document) | 105 | `src/extension.ts` — see: Multi-root, file ops, editing |
| [`esbuild-sample`](esbuild-sample) | 31 | `src/math.ts`, `src/extension.ts` — see: Bundling |
| [`extension-terminal-sample`](extension-terminal-sample) | 55 | `src/extension.ts` — see: Tasks, terminals, shell integration |
| [`fsconsumer-sample`](fsconsumer-sample) | 90 | `src/extension.ts` — see: File system providers |
| [`fsprovider-sample`](fsprovider-sample) | 310 | `src/fileSystemProvider.ts`, `src/extension.ts` — see: File system providers |
| [`getting-started-sample`](getting-started-sample) | 30 | `src/extension.ts` — see: SCM, theming, misc |
| [`github-authentication-sample`](github-authentication-sample) | 87 | `src/credentials.ts`, `src/extension.ts` — see: Authentication |
| [`helloworld-minimal-sample`](helloworld-minimal-sample) | 0 | — — see: Scaffolding / hello world |
| [`helloworld-sample`](helloworld-sample) | 23 | `src/extension.ts` — see: Scaffolding / hello world, Commands, menus, status bar |
| [`helloworld-test-cli-sample`](helloworld-test-cli-sample) | 38 | `src/test/suite/extension.test.ts`, `src/extension.ts` — see: Testing |
| [`helloworld-test-sample`](helloworld-test-sample) | 98 | `src/test/runTest.ts`, `src/test/suite/index.ts`, `src/test/suite/extension.test.ts`, `src/extension.ts` — see: Testing |
| [`helloworld-web-sample`](helloworld-web-sample) | 74 | `src/web/test/suite/index.ts`, `src/web/test/suite/extension.test.ts`, `src/web/extension.ts` — see: Scaffolding / hello world |
| [`inline-completions`](inline-completions) | 81 | `src/extension.ts` — see: Language features (single-file providers) |
| [`jupyter-kernel-execution-sample`](jupyter-kernel-execution-sample) | 170 | `src/extension.ts` |
| [`jupyter-server-provider-sample`](jupyter-server-provider-sample) | 319 | `src/jupyter.ts`, `src/extension.ts` |
| [`l10n-sample`](l10n-sample) | 62 | `src/cli.ts`, `src/command/sayBye.ts`, `src/extension.ts` — see: Configuration, l10n, telemetry |
| [`language-configuration-sample`](language-configuration-sample) | 0 | — — see: Language features (single-file providers) |
| [`lm-api-tutorial`](lm-api-tutorial) | 102 | `src/extension.ts` — see: MCP tools & chat |
| [`lsp-embedded-language-service`](lsp-embedded-language-service) | 661 | `client/src/extension.ts`, `server/src/languageModes.ts`, `server/src/server.ts`, `server/src/embeddedSupport.ts`, `server/src/languageModelCache.ts`, `server/src/modes/cssMode.ts`, `server/src/modes/htmlMode.ts` — see: Language servers (LSP) |
| [`lsp-log-streaming-sample`](lsp-log-streaming-sample) | 529 | `client/src/test/helper.ts`, `client/src/test/diagnostics.test.ts`, `client/src/test/index.ts`, `client/src/test/runTest.ts`, `client/src/test/completion.test.ts`, `client/src/extension.ts`, `server/src/server.ts` — see: Language servers (LSP) |
| [`lsp-embedded-request-forwarding`](lsp-embedded-request-forwarding) | 265 | `client/src/embeddedSupport.ts`, `client/src/extension.ts`, `server/src/server.ts` — see: Language servers (LSP) |
| [`lsp-multi-server-sample`](lsp-multi-server-sample) | 169 | `client/src/extension.ts`, `server/src/server.ts` — see: Language servers (LSP) |
| [`lsp-sample`](lsp-sample) | 510 | `client/src/test/helper.ts`, `client/src/test/diagnostics.test.ts`, `client/src/test/index.ts`, `client/src/test/runTest.ts`, `client/src/test/completion.test.ts`, `client/src/extension.ts`, `server/src/server.ts` — see: Language servers (LSP) |
| [`lsp-user-input-sample`](lsp-user-input-sample) | 127 | `client/src/extension.ts`, `server/src/sampleServer.ts` — see: Language servers (LSP) |
| [`lsp-web-extension-sample`](lsp-web-extension-sample) | 159 | `client/src/browserClientMain.ts`, `server/src/browserServerMain.ts` — see: Language servers (LSP) |
| [`mcp-extension-sample`](mcp-extension-sample) | 95 | `src/extension.ts` — see: MCP tools & chat |
| [`nodefs-provider-sample`](nodefs-provider-sample) | 299 | `src/extension.ts` — see: File system providers |
| [`notebook-extend-markdown-renderer-sample`](notebook-extend-markdown-renderer-sample) | 23 | `src/emoji.ts` — see: Notebooks |
| [`notebook-format-code-action-sample`](notebook-format-code-action-sample) | 132 | `src/extension.ts` — see: Notebooks |
| [`notebook-renderer-react-sample`](notebook-renderer-react-sample) | 90 | `src/client/render.tsx`, `src/client/index.tsx`, `src/client/css.d.ts` — see: Notebooks |
| [`notebook-renderer-sample`](notebook-renderer-sample) | 107 | `src/render.ts`, `src/index.ts`, `src/css.d.ts` — see: Notebooks |
| [`notebook-serializer-sample`](notebook-serializer-sample) | 142 | `src/serializer.ts`, `src/extension.ts`, `src/controller.ts` — see: Notebooks |
| [`notifications-sample`](notifications-sample) | 78 | `src/extension.ts` — see: SCM, theming, misc |
| [`product-icon-theme-sample`](product-icon-theme-sample) | 0 | — — see: SCM, theming, misc |
| [`progress-sample`](progress-sample) | 41 | `src/extension.ts` — see: Activation & progress |
| [`proposed-api-sample`](proposed-api-sample) | 16 | `src/extension.ts` — see: SCM, theming, misc |
| [`quickinput-sample`](quickinput-sample) | 491 | `src/multiStepInput.ts`, `src/basicInput.ts`, `src/quickOpen.ts`, `src/extension.ts` — see: UI: quick pick, decorations, comments |
| [`semantic-tokens-sample`](semantic-tokens-sample) | 103 | `src/extension.ts` — see: Language features (single-file providers) |
| [`shell-integration-sample`](shell-integration-sample) | 38 | `src/extension.ts` — see: Tasks, terminals, shell integration |
| [`snippet-sample`](snippet-sample) | 0 | — — see: Language features (single-file providers) |
| [`source-control-sample`](source-control-sample) | 1020 | `src/fiddleConfiguration.ts`, `src/util.ts`, `src/afs.ts`, `src/fiddleRepository.ts`, `src/fiddleSourceControl.ts`, `src/extension.ts`, `src/fiddleDocumentContentProvider.ts` — see: SCM, theming, misc |
| [`statusbar-sample`](statusbar-sample) | 50 | `src/extension.ts` — see: Commands, menus, status bar |
| [`tabs-api-sample`](tabs-api-sample) | 53 | `src/extension.ts` — see: Tree views |
| [`task-provider-sample`](task-provider-sample) | 327 | `src/rakeTaskProvider.ts`, `src/customTaskProvider.ts`, `src/extension.ts` — see: Tasks, terminals, shell integration |
| [`telemetry-sample`](telemetry-sample) | 34 | `src/extension.ts` — see: Configuration, l10n, telemetry |
| [`terminal-sample`](terminal-sample) | 221 | `src/extension.ts` — see: Tasks, terminals, shell integration |
| [`test-provider-sample`](test-provider-sample) | 394 | `src/parser.ts`, `src/testTree.ts`, `src/extension.ts` — see: Testing |
| [`theme-sample`](theme-sample) | 0 | — — see: SCM, theming, misc |
| [`tree-view-sample`](tree-view-sample) | 1199 | `src/nodeDependencies.ts`, `src/testViewDragAndDrop.ts`, `src/ftpExplorer.ts`, `src/testView.ts`, `src/jsftp.d.ts`, `src/extension.ts`, `src/fileExplorer.ts`, `src/jsonOutline.ts` — see: Tree views |
| [`uri-handler-sample`](uri-handler-sample) | 33 | `src/extension.ts` — see: SCM, theming, misc |
| [`vim-sample`](vim-sample) | 1734 | `src/common.ts`, `src/operators.ts`, `src/mappings.ts`, `src/words.ts`, `src/motions.ts`, `src/extension.ts`, `src/controller.ts` — see: SCM, theming, misc |
| [`virtual-document-sample`](virtual-document-sample) | 64 | `src/cowsay.d.ts`, `src/extension.ts` — see: Language features (single-file providers) |
| [`wasm-component-model`](wasm-component-model) | 252 | `src/calculator.ts`, `src/extension.ts` — see: WASM |
| [`wasm-component-model-async`](wasm-component-model-async) | 225 | `src/calculator.ts`, `src/worker.ts`, `src/extension.ts` — see: WASM |
| [`wasm-component-model-resource`](wasm-component-model-resource) | 194 | `src/calculator.ts`, `src/extension.ts` — see: WASM |
| [`wasm-language-server`](wasm-language-server) | 65 | `client/src/extension.ts` — see: WASM |
| [`webpack-sample`](webpack-sample) | 28 | `src/math.ts`, `src/extension.ts` — see: Bundling |
| [`webview-codicons-sample`](webview-codicons-sample) | 385 | `src/extension.ts` — see: Webviews |
| [`webview-sample`](webview-sample) | 222 | `src/extension.ts` — see: Webviews |
| [`webview-view-sample`](webview-view-sample) | 124 | `src/extension.ts` — see: Webviews |
| [`welcome-view-content-sample`](welcome-view-content-sample) | 12 | `src/extension.ts` — see: Activation & progress |

