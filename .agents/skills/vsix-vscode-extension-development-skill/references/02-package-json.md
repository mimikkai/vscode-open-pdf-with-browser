## 2. package.json Reference

### Essential Fields

```json
{
  "name": "my-extension",
  "displayName": "My Extension",
  "description": "What the extension does",
  "version": "0.0.1",
  "publisher": "your-publisher-id",
  "engines": { "vscode": "^1.100.0" },
  "categories": ["Programming Languages", "Snippets", "Other"],
  "activationEvents": [],
  "main": "./out/extension.js",
  "contributes": { ... },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./",
    "lint": "eslint",
    "pretest": "npm run compile",
    "test": "node ./out/test/runTest.js"
  },
  "devDependencies": {
    "@types/vscode": "^1.100.0",
    "@types/node": "^22",
    "typescript": "^5.8.2",
    "eslint": "^9.13.0",
    "@eslint/js": "^9.13.0",
    "typescript-eslint": "^8.26.0",
    "@stylistic/eslint-plugin": "^2.9.0"
  }
}
```

### All Contribution Points

| Contribution Point | Description | Key Fields |
|---|---|---|
| `commands` | Command palette commands | `command`, `title`, `category` |
| `menus` | Menu item placements | `command`, `when`, `group`, `alt` |
| `keybindings` | Keyboard shortcuts | `command`, `key`, `mac`, `when` |
| `configuration` | Settings | `title`, `properties` (with type, default, scope) |
| `configurationDefaults` | Default editor/workspace settings | Language-specific overrides |
| `colors` | Themable colors | `id`, `defaults: {light, dark, highContrast}` |
| `snippets` | Code snippets | `language`, `path` |
| `languages` | Language definitions | `id`, `extensions`, `aliases`, `configuration` |
| `grammars` | TextMate grammars | `language`, `scopeName`, `path` |
| `themes` | Color themes | `label`, `uiTheme`, `path` |
| `iconThemes` | File icon themes | `id`, `label`, `path` |
| `productIconThemes` | Product icon themes | `id`, `label`, `path` |
| `views` | Sidebar panels | `id`, `name`, `type`, `when` |
| `viewsContainers` | Activity bar / sidebar panels | `id`, `title`, `icon` |
| `viewsWelcome` | Welcome content for views | `view`, `contents`, `when` |
| `customEditors` | Custom editor providers | `viewType`, `selector`, `priority` |
| `notebooks` | Notebook types | `type`, `displayName`, `selector` |
| `terminal` | Terminal profiles | `id`, `title`, `icon` |
| `debuggers` | Debug adapters | `type`, `label`, `runtime`, `configurationAttributes` |
| `problemMatchers` | Task problem matchers | `name`, `owner`, `pattern` |
| `taskDefinitions` | Task types | `type`, `required`, `properties` |
| `authentication` | Auth providers | `id`, `label` |
| `chatParticipants` | Copilot Chat participants | `id`, `name`, `commands` |
| `languageModelTools` | AI/LM tools for Copilot | `name`, `displayName`, `modelDescription`, `inputSchema` |
| `mcpServerDefinitionProviders` | MCP server providers | `id`, `label` |
| `l10n` | Localization bundle path | `"./l10n"` |

### Extension Kind (Remote Support)

```json
{
  "extensionKind": ["ui", "workspace"]
}
```

- `"ui"`: Extension runs on the local machine (UI extensions: themes, webviews, keybindings)
- `"workspace"`: Extension runs on the remote machine (language features, debuggers, tools)
- Order matters: `["ui", "workspace"]` = prefer local, fallback to remote
