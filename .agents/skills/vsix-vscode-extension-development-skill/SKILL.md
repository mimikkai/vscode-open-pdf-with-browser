---
name: vsix-vscode-extension-development-skill
description: Use when developing VS Code extensions (.vsix), VS Code API, package.json contributes, activation events, webview, language providers, tree views, MCP/Language Model tools, or any vscode extension API work. Covers scaffolding, bundling, testing, debugging, and publishing.
license: MIT
---

# VS Code Extension (VSIX) Development Skill

Detailed guides live in `references/` (one file per topic) and runnable examples in `references/vscode-extension-samples/` (official Microsoft samples, trimmed to source code).

## How To Use

1. Find the topic in the routing table below.
2. Read the referenced `references/<file>.md` for API details and code.
3. For concrete working code, open the mapped sample directory (see `references/INDEX.md` for a full file-level index).

## Routing Table

| Topic | Detailed guide | Samples |
|---|---|---|
| Project structure, scaffolding, yo code | `references/01-scaffolding.md` | `helloworld-minimal-sample` |
| package.json: manifest, all contribution points, extensionKind | `references/02-package-json.md` | `helloworld-sample` |
| Activation & lifecycle, `activate()`/`deactivate()`, disposables | `references/03-activation.md` | `progress-sample` |
| Commands, menus, keybindings, when clauses | `references/04-commands.md` | `helloworld-sample`, `statusbar-sample` |
| UI: status bar, quick pick, input, notifications, progress | `references/05-ui-components.md` | `quickinput-sample`, `notifications-sample` |
| Language features: completions, CodeLens, code actions, diagnostics, hover, definition, semantic tokens, signature help, symbols | `references/06-language-features.md` | `completions-sample`, `code-actions-sample`, `codelens-sample`, `semantic-tokens-sample` |
| Tree views: providers, drag-and-drop, view containers | `references/07-tree-views.md` | `tree-view-sample` |
| Webview: panels, sidebar views, CSP/nonce, message passing | `references/08-webview.md` | `webview-sample`, `webview-view-sample` |
| Language Server Protocol: client/server setup, multi-server | `references/09-lsp.md` | `lsp-sample`, `lsp-multi-server-sample` |
| MCP & Language Model Tools, chat participants, model providers | `references/10-mcp-lm-tools.md` | `mcp-extension-sample`, `chat-sample`, `lm-api-tutorial` |
| Custom editors & notebooks: text/binary editors, serializers, renderers | `references/11-custom-editors-notebooks.md` | `custom-editor-sample`, `notebook-serializer-sample` |
| File system providers (virtual FS) | `references/12-fs-providers.md` | `fsprovider-sample`, `fsconsumer-sample` |
| Authentication providers, GitHub auth | `references/13-authentication.md` | `authenticationprovider-sample`, `github-authentication-sample` |
| Configuration & settings, scopes, change listeners | `references/14-configuration.md` | `configuration-sample` |
| Snippets & language configuration | `references/15-snippets-language-config.md` | `snippet-sample`, `language-configuration-sample` |
| Themes: color, icon, product-icon themes, themable colors | `references/16-themes.md` | `theme-sample`, `product-icon-theme-sample` |
| Telemetry & localization (l10n) | `references/17-telemetry-l10n.md` | `telemetry-sample`, `l10n-sample` |
| Testing: @vscode/test-electron, test-cli, Test provider | `references/18-testing.md` | `helloworld-test-sample`, `test-provider-sample` |
| Build & bundling: tsc, esbuild, webpack | `references/19-build-bundling.md` | `esbuild-sample`, `webpack-sample` |
| Debugging: launch.json, tasks.json, breakpoint types | `references/20-debugging.md` | `helloworld-sample` |
| Publishing: vsce packaging, marketplace | `references/21-publishing.md` | — |
| Best practices: security, performance, error handling | `references/22-best-practices.md` | — |
| Code templates: minimal, MCP tools, esbuild, tests | `references/23-code-templates.md` | — |
| Common patterns: disposal, singleton webview, events, secret storage, state | `references/24-patterns.md` | — |
| Decision helper: which APIs for which goal | `references/25-decision-helper.md` | — |

## Sample Navigation

Full topic-to-sample mapping and per-sample file inventory: [references/INDEX.md](references/INDEX.md).

Sample sources: `references/vscode-extension-samples/` (microsoft/vscode-extension-samples, MIT; media, lockfiles and build output stripped — kept `*.ts`/`*.tsx` plus each sample's `package.json`/`tsconfig.json`).