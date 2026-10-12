## 18. Testing

### Method 1: @vscode/test-electron (Classic)

```
src/test/
  runTest.ts          # Downloads VS Code, runs tests
  suite/
    index.ts          # Mocha TDD setup, glob for test files
    extension.test.ts  # Actual tests
```

**runTest.ts:**
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

**suite/index.ts:**
```typescript
import * as path from 'path';
import * as Mocha from 'mocha';
import * as glob from 'glob';

export async function run(): Promise<void> {
  const mocha = new Mocha({ ui: 'tdd' });
  mocha.useColors(true);
  const testsRoot = path.resolve(__dirname, '..');
  return new Promise((resolve, reject) => {
    glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
      if (err) { return reject(err); }
      files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));
      try {
        mocha.run((failures) => {
          if (failures > 0) { reject(new Error(`${failures} tests failed`)); }
          else { resolve(); }
        });
      } catch (err) { reject(err); }
    });
  });
}
```

**extension.test.ts:**
```typescript
import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  test('Extension should be present', () => {
    assert.ok(vscode.extensions.getExtension('publisher.myExtension'));
  });

  test('Command should be registered', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('myExt.hello'));
  });
});
```

**package.json scripts:**
```json
{
  "scripts": {
    "pretest": "npm run compile",
    "test": "node ./out/test/runTest.js"
  },
  "devDependencies": {
    "@vscode/test-electron": "^2.3.9",
    "mocha": "^10.2.0",
    "@types/mocha": "^10.0.0",
    "glob": "^7.1.4",
    "source-map-support": "^0.5.21"
  }
}
```

### Method 2: @vscode/test-cli (Newer)

```json
{
  "scripts": {
    "test": "vscode-test"
  },
  "devDependencies": {
    "@vscode/test-cli": "^0.0.8",
    "@vscode/test-electron": "^2.3.9",
    "mocha": "^10.2.0",
    "@types/mocha": "^10.0.0"
  }
}
```

Create `.vscode-test.mjs`:
```javascript
import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
  files: 'out/test/**/*.test.js',
  mocha: {
    ui: 'tdd',
    timeout: 20000,
  },
});
```
