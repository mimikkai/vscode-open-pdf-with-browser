## 19. Build & Bundling

### tsc Only (Simplest)

```json
{
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./"
  },
  "main": "./out/extension.js"
}
```

### esbuild (Recommended for performance)

**esbuild.js:**
```javascript
const esbuild = require('esbuild');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

async function main() {
  const ctx = await esbuild.context({
    entryPoints: ['src/extension.ts'],
    bundle: true,
    format: 'cjs',
    minify: production,
    sourcemap: !production,
    plugins: [/* custom plugins */],
    logLevel: production ? undefined : 'info',
    platform: 'node',
    target: 'ES2024',
    external: ['vscode'],
    outfile: 'dist/extension.js',
  });

  if (watch) {
    await ctx.watch();
  } else {
    await ctx.rebuild();
    await ctx.dispose();
  }
}

main().catch(console.error);
```

**package.json:**
```json
{
  "scripts": {
    "vscode:prepublish": "npm run package",
    "package": "check-types && lint && node esbuild.js --production",
    "watch": "npm-run-all -p watch:*",
    "watch:esbuild": "node esbuild.js --watch",
    "watch:tsc": "tsc -p tsconfig.json --noEmit --watch --preserveWatchOutput",
    "check-types": "tsc -p tsconfig.json --noEmit",
    "lint": "eslint"
  },
  "main": "./dist/extension.js"
}
```

**Key esbuild options:**
- `bundle: true`: Bundle all dependencies into single file
- `format: 'cjs'`: CommonJS required by VS Code
- `platform: 'node'`: Node.js runtime
- `external: ['vscode']`: Never bundle the vscode module
- `minify: production`: Minify only for production builds

### webpack

**webpack.config.js:**
```javascript
module.exports = {
  target: 'node',
  mode: 'none',
  entry: './src/extension.ts',
  output: {
    filename: 'extension.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  externals: { vscode: 'commonjs vscode' },
  resolve: { mainFields: ['browser', 'module', 'main'], extensions: ['.ts', '.js'] },
  module: {
    rules: [{ test: /\.ts$/, exclude: /node_modules/, use: [{ loader: 'ts-loader', options: { compilerOptions: { module: 'es6' } } }] }],
  },
};
```

**package.json:**
```json
{
  "scripts": {
    "vscode:prepublish": "webpack --mode production",
    "webpack-dev": "webpack --mode development --watch",
    "compile": "webpack --mode development"
  },
  "main": "./dist/extension"
}
```

### Build Comparison

| Aspect | tsc | esbuild | webpack |
|---|---|---|---|
| Speed | Slow | Very fast | Moderate |
| Bundling | No (one file per .ts) | Yes (single bundle) | Yes (single bundle) |
| Size | Large (many files) | Small (minified) | Small (minified) |
| Setup | Zero config | Minimal config | Complex config |
| Source maps | Yes | Yes | Yes |
| Recommended for | Simple extensions | Most extensions | Legacy extensions |
