## 23. Code Templates

### Complete Minimal Extension (TypeScript + tsc)

**package.json:**
```json
{
  "name": "my-extension",
  "displayName": "My Extension",
  "description": "My VS Code extension",
  "version": "0.0.1",
  "publisher": "my-publisher",
  "engines": { "vscode": "^1.100.0" },
  "categories": ["Other"],
  "activationEvents": [],
  "main": "./out/extension.js",
  "contributes": {
    "commands": [
      { "command": "myExtension.helloWorld", "title": "Hello World" }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./",
    "lint": "eslint"
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

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2024",
    "lib": ["ES2024"],
    "outDir": "out",
    "sourceMap": true,
    "strict": true,
    "rootDir": "src",
    "esModuleInterop": true
  },
  "exclude": ["node_modules", ".vscode-test"]
}
```

**src/extension.ts:**
```typescript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('myExtension.helloWorld', () => {
      vscode.window.showInformationMessage('Hello World!');
    })
  );
}

export function deactivate() {}
```

**.gitignore:**
```
out
node_modules
.vscode-test/
*.vsix
```

### Complete Extension with MCP Tools

**src/tool.ts:**
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
      return new vscode.LanguageModelToolResult([
        new vscode.LanguageModelTextPart(JSON.stringify({
          isError: true,
          message: error instanceof Error ? error.message : String(error),
        })),
      ]);
    }
  }

  abstract call(
    options: vscode.LanguageModelToolInvocationOptions<object>,
    token: vscode.CancellationToken
  ): Promise<string>;
}
```

**src/myTool.ts:**
```typescript
import * as vscode from 'vscode';
import { Tool } from './tool';

export class MyTool extends Tool {
  public readonly toolName = 'my_tool';

  async call(
    options: vscode.LanguageModelToolInvocationOptions<{
      input: string;
    }>,
    _token: vscode.CancellationToken
  ): Promise<string> {
    const { input } = options.input as any;
    vscode.window.showInformationMessage(`Processing: ${input}`);
    return JSON.stringify({ success: true, result: `Processed: ${input}` });
  }
}
```

**src/extension.ts:**
```typescript
import * as vscode from 'vscode';
import { MyTool } from './myTool';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('myExtension.helloWorld', () => {
      vscode.window.showInformationMessage('Hello World!');
    })
  );

  const myTool = new MyTool();
  context.subscriptions.push(
    vscode.lm.registerTool(myTool.toolName, myTool)
  );
}
```

### Complete Extension with esbuild

**esbuild.js:**
```javascript
const esbuild = require('esbuild');

const production = process.argv.includes('--production');

async function main() {
  await esbuild.build({
    entryPoints: ['src/extension.ts'],
    bundle: true,
    format: 'cjs',
    minify: production,
    sourcemap: !production,
    platform: 'node',
    target: 'ES2024',
    external: ['vscode'],
    outfile: 'dist/extension.js',
  });
}

main().catch(console.error);
```

**package.json scripts:**
```json
{
  "scripts": {
    "vscode:prepublish": "npm run package",
    "package": "npm run check-types && npm run lint && node esbuild.js --production",
    "compile": "node esbuild.js",
    "watch": "node esbuild.js --watch",
    "check-types": "tsc --noEmit",
    "lint": "eslint"
  },
  "main": "./dist/extension.js",
  "devDependencies": {
    "@types/vscode": "^1.100.0",
    "@types/node": "^22",
    "typescript": "^5.8.2",
    "esbuild": "^0.25.0",
    "eslint": "^9.13.0",
    "@eslint/js": "^9.13.0",
    "typescript-eslint": "^8.26.0",
    "@stylistic/eslint-plugin": "^2.9.0"
  }
}
```

### Complete Extension with Tests

**src/test/runTest.ts:**
```typescript
import * as path from 'path';
import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    const extensionTestsPath = path.resolve(__dirname, './suite/index');
    await runTests({ extensionDevelopmentPath, extensionTestsPath });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
```

**src/test/suite/index.ts:**
```typescript
import * as path from 'path';
import * as Mocha from 'mocha';
import * as glob from 'glob';

export async function run(): Promise<void> {
  const mocha = new Mocha({ ui: 'tdd', timeout: 20000 });
  mocha.useColors(true);
  const testsRoot = path.resolve(__dirname, '..');
  return new Promise((resolve, reject) => {
    glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
      if (err) { return reject(err); }
      files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));
      try {
        mocha.run(failures => {
          if (failures > 0) { reject(new Error(`${failures} tests failed`)); }
          else { resolve(); }
        });
      } catch (err) { reject(err); }
    });
  });
}
```

**src/test/suite/extension.test.ts:**
```typescript
import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Tests', () => {
  test('Extension activates', async () => {
    const ext = vscode.extensions.getExtension('myPublisher.myExtension');
    assert.ok(ext);
    await ext!.activate();
    assert.strictEqual(ext!.isActive, true);
  });

  test('Command is registered', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('myExtension.helloWorld'));
  });

  test('Command executes', async () => {
    await vscode.commands.executeCommand('myExtension.helloWorld');
  });
});
```
