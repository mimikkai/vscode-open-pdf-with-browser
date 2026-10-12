## 10. MCP & Language Model Tools

This is the key integration pattern from the `vscode-extension-and-mcp-together` sample.

### Architecture: VS Code native LM Tools vs External MCP

| Approach | Transport | When to Use |
|---|---|---|
| **Native LM Tools** (`vscode.lm`) | In-process, no external server | Simple tools, extension-managed tools |
| **MCP Server Definition Provider** | stdio/SSE external process | External MCP servers, remote services |
| **Chat Participant** | In-process, conversational AI | Interactive AI conversations |

### Native LM Tool: package.json Declaration

```json
{
  "contributes": {
    "languageModelTools": [
      {
        "name": "my_tool",
        "displayName": "My Tool",
        "toolReferenceName": "myTool",
        "userDescription": "Does X for the user",
        "modelDescription": "Use this tool to do X when the user asks about Y. It takes parameter Z which means W.",
        "icon": "$(rocket)",
        "tags": ["utility", "automation"],
        "canBeReferencedInPrompt": true,
        "inputSchema": {
          "type": "object",
          "properties": {
            "filePath": {
              "type": "string",
              "description": "Path to the file to process"
            },
            "recursive": {
              "type": "boolean",
              "description": "Process recursively",
              "default": false
            }
          },
          "required": ["filePath"]
        }
      }
    ]
  }
}
```

### Native LM Tool: Abstract Base Class (Template Method Pattern)

```typescript
import * as vscode from 'vscode';

export abstract class Tool implements vscode.LanguageModelTool<object> {
  abstract toolName: string;

  async invoke(
    options: vscode.LanguageModelToolInvocationOptions<object>,
    token: vscode.CancellationToken
  ): Promise<vscode.LanguageModelToolResult> {
    try {
      const response = await this.call(options, token);
      return new vscode.LanguageModelToolResult([
        new vscode.LanguageModelTextPart(response),
      ]);
    } catch (error) {
      const errorPayload = {
        isError: true,
        message: error instanceof Error ? error.message : String(error),
      };
      return new vscode.LanguageModelToolResult([
        new vscode.LanguageModelTextPart(JSON.stringify(errorPayload)),
      ]);
    }
  }

  abstract call(
    options: vscode.LanguageModelToolInvocationOptions<object>,
    token: vscode.CancellationToken
  ): Promise<string>;
}
```

### Native LM Tool: Concrete Implementation

```typescript
import * as vscode from 'vscode';
import { Tool } from './tool';

export class FileSearchTool extends Tool {
  public readonly toolName = 'file_search_tool';

  async call(
    options: vscode.LanguageModelToolInvocationOptions<{
      pattern: string;
      maxResults?: number;
    }>,
    _token: vscode.CancellationToken
  ): Promise<string> {
    const { pattern, maxResults = 10 } = options.input as any;
    const files = await vscode.workspace.findFiles(pattern, undefined, maxResults);
    vscode.window.showInformationMessage(`Found ${files.length} files`);
    return JSON.stringify({
      success: true,
      files: files.map(f => f.fsPath),
    });
  }
}
```

### Native LM Tool: Registration in activate()

```typescript
export function activate(context: vscode.ExtensionContext) {
  const fileSearchTool = new FileSearchTool();
  context.subscriptions.push(
    vscode.lm.registerTool(fileSearchTool.toolName, fileSearchTool)
  );
}
```

### Chat Participant

```typescript
const PARTICIPANT_ID = 'myExt.myAssistant';

vscode.chat.createChatParticipant(PARTICIPANT_ID, {
  async handler(request, context, stream, token) {
    const messages = [
      vscode.LanguageModelChatMessage.Assistant('You are a helpful assistant.'),
    ];

    for (const turn of context.history) {
      if (turn instanceof vscode.ChatResponseTurn) {
        let text = '';
        for (const part of turn.parts) {
          if (part instanceof vscode.ChatResponseMarkdownPart) {
            text += part.value.value;
          }
        }
        messages.push(vscode.LanguageModelChatMessage.Assistant(text));
      } else {
        messages.push(vscode.LanguageModelChatMessage.User(request.prompt));
      }
    }

    messages.push(vscode.LanguageModelChatMessage.User(request.prompt));

    const response = await request.model.sendRequest(messages, {}, token);
    for await (const chunk of response.text) {
      stream.markdown(chunk);
    }
  },
});
```

### package.json for Chat Participant

```json
{
  "contributes": {
    "chatParticipants": [
      {
        "id": "myExt.myAssistant",
        "name": "myAssistant",
        "commands": [
          { "name": "explain", "description": "Explain code" },
          { "name": "fix", "description": "Fix issues" }
        ]
      }
    ]
  }
}
```

### MCP Server Definition Provider (External MCP Servers)

```typescript
vscode.lm.registerMcpServerDefinitionProvider('myMcpProvider', {
  onDidChangeMcpServerDefinitions: new vscode.EventEmitter<void>().event,

  async provideMcpServerDefinitions(token) {
    const servers: vscode.McpServerDefinition[] = [];

    const config = vscode.workspace.getConfiguration('myExt');
    const serverUrl = config.get<string>('mcpServerUrl');
    if (serverUrl) {
      servers.push(
        new vscode.McpStdioServerDefinition(
          'my-server',
          'My MCP Server',
          new vscode.RelativePattern(
            vscode.workspace.workspaceFolders?.[0]!,
            'node_modules/.bin/my-server'
          ),
          ['start']
        )
      );
    }
    return servers;
  }
});
```

### Using LM API Directly (not as chat participant)

```typescript
const models = await vscode.lm.selectChatModels({
  vendor: 'copilot',
  family: 'gpt-4o',
});

if (models.length > 0) {
  const response = await models[0].sendRequest(
    [vscode.LanguageModelChatMessage.User('Explain this code')],
    {},
    token
  );
  for await (const chunk of response.text) {
    // process text chunk
  }
}
```
