## 14. Configuration & Settings

### package.json Configuration

```json
{
  "contributes": {
    "configuration": [
      {
        "id": "myExt",
        "title": "My Extension",
        "order": 1,
        "properties": {
          "myExt.enableFeature": {
            "type": "boolean",
            "default": true,
            "description": "Enable the feature",
            "scope": "window",
            "order": 0
          },
          "myExt.maxResults": {
            "type": "number",
            "default": 100,
            "description": "Maximum number of results",
            "scope": "resource",
            "minimum": 1,
            "maximum": 1000
          },
          "myExt.serverUrl": {
            "type": "string",
            "default": "",
            "description": "Server URL",
            "scope": "machine",
            "format": "uri"
          },
          "myExt.filePatterns": {
            "type": "array",
            "default": ["**/*.ts"],
            "description": "File patterns to search",
            "scope": "window",
            "items": { "type": "string" }
          }
        }
      }
    ]
  }
}
```

### Configuration Scopes

| Scope | Meaning | Shared across machines? |
|---|---|---|
| `window` | Global, applies to all workspaces in a window | Yes |
| `resource` | Per-folder/workspace (can differ per workspace) | No |
| `machine` | Machine-specific (paths, etc.) | No |
| `machine-overridable` | Machine-specific but user can override | No |
| `language-overridable` | Can be overridden per language | Depends |

### Reading & Writing Configuration

```typescript
// Read
const config = vscode.workspace.getConfiguration('myExt');
const enabled = config.get<boolean>('enableFeature', true);

// Read resource-scoped config for a specific file
const resourceConfig = vscode.workspace.getConfiguration('myExt', document.uri);
const maxResults = resourceConfig.get<number>('maxResults', 100);

// Write
await config.update('enableFeature', false, vscode.ConfigurationTarget.Global);
await config.update('maxResults', 50, vscode.ConfigurationTarget.Workspace);
await resourceConfig.update('maxResults', 25, vscode.ConfigurationTarget.WorkspaceFolder);

// Listen for changes
context.subscriptions.push(
  vscode.workspace.onDidChangeConfiguration(e => {
    if (e.affectsConfiguration('myExt')) {
      // Reload settings
    }
  })
);
```
