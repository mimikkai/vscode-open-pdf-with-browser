## 6. Language Features

### Completion Item Provider

```typescript
vscode.languages.registerCompletionItemProvider(
  { scheme: 'file', language: 'mylang' },
  {
    provideCompletionItems(document, position, token, context) {
      const item1 = new vscode.CompletionItem('Hello');
      item1.kind = vscode.CompletionItemKind.Function;
      item1.detail = 'A greeting function';
      item1.documentation = new vscode.MarkdownString('says **Hello**');
      item1.insertText = new vscode.SnippetString('hello(${1:name})');
      item1.commitCharacters = ['.', ','];
      item1.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger' };

      const item2 = new vscode.CompletionItem('world');
      item2.kind = vscode.CompletionItemKind.Variable;

      return [item1, item2];
    },
  },
  '.', ':' // trigger characters
);
```

### Inline Completion Provider

```typescript
// NOTE: requires enabledApiProposals: ["inlineCompletionsAdditions"]
vscode.languages.registerInlineCompletionItemProvider(
  { pattern: '**' },
  {
    provideInlineCompletionItems(document, position, context, token) {
      const line = document.lineAt(position.line).text;
      const prefix = line.substring(0, position.character);
      if (prefix.endsWith('// ')) {
        return {
          items: [
            new vscode.InlineCompletionItem(
              'TODO: implement',
              new vscode.Range(position, position)
            ),
          ],
        };
      }
      return { items: [] };
    },
  }
);
```

### CodeLens Provider

```typescript
class CodelensProvider implements vscode.CodeLensProvider {
  private _onDidChangeCodeLenses = new vscode.EventEmitter<void>();
  onDidChangeCodeLenses = this._onDidChangeCodeLenses.event;

  provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
    const config = vscode.workspace.getConfiguration('myExt');
    if (!config.get('enableCodeLens')) { return []; }

    const lenses: vscode.CodeLens[] = [];
    const regex = /TODO/g;
    const text = document.getText();
    let match;
    while ((match = regex.exec(text))) {
      const pos = document.positionAt(match.index);
      const range = document.lineAt(pos.line).range;
      lenses.push(new vscode.CodeLens(range, {
        title: 'Resolve TODO',
        command: 'myExt.resolveTodo',
        arguments: [range],
      }));
    }
    return lenses;
  }

  resolveCodeLens(lens: vscode.CodeLens): vscode.CodeLens {
    lens.command = {
      title: 'Click to resolve',
      command: 'myExt.resolveTodo',
    };
    return lens;
  }
}

context.subscriptions.push(
  vscode.languages.registerCodeLensProvider('*', new CodelensProvider())
);
```

### Code Actions (Quick Fix)

```typescript
class Emojizer implements vscode.CodeActionProvider {
  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range,
    context: vscode.CodeActionContext
  ): vscode.CodeAction[] {
    const text = document.getText(range);
    if (!text.includes(':)')) { return []; }

    const fix = new vscode.CodeAction(
      'Convert :) to emoji',
      vscode.CodeActionKind.QuickFix
    );
    fix.isPreferred = true;
    fix.edit = new vscode.WorkspaceEdit();
    fix.edit.replace(
      document.uri,
      range,
      text.replace(/:\)/g, '\u{1F642}')
    );
    return [fix];
  }
}

context.subscriptions.push(
  vscode.languages.registerCodeActionProvider(
    { scheme: 'file' },
    new Emojizer(),
    { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] }
  )
);
```

### Diagnostics

```typescript
const diagnosticCollection = vscode.languages.createDiagnosticCollection('myExt');
context.subscriptions.push(diagnosticCollection);

function updateDiagnostics(document: vscode.TextDocument) {
  const diagnostics: vscode.Diagnostic[] = [];
  const text = document.getText();
  const regex = /TODO/g;
  let match;
  while ((match = regex.exec(text))) {
    const pos = document.positionAt(match.index);
    const range = new vscode.Range(pos, pos.translate(0, 4));
    diagnostics.push(new vscode.Diagnostic(
      range,
      'TODO found',
      vscode.DiagnosticSeverity.Warning
    ));
  }
  diagnosticCollection.set(document.uri, diagnostics);
}

context.subscriptions.push(
  vscode.workspace.onDidChangeTextDocument(e => updateDiagnostics(e.document))
);
context.subscriptions.push(
  vscode.window.onDidChangeActiveTextEditor(e => {
    if (e) { updateDiagnostics(e.document); }
  })
);
```

### Hover Provider

```typescript
vscode.languages.registerHoverProvider('javascript', {
  provideHover(document, position, token) {
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);
    return new vscode.Hover([
      `**${word}**`,
      `Definition of ${word}`,
    ]);
  }
});
```

### Definition Provider

```typescript
vscode.languages.registerDefinitionProvider('javascript', {
  provideDefinition(document, position, token) {
    // Return location(s) where symbol at position is defined
    return new vscode.Location(document.uri, new vscode.Position(0, 0));
  }
});
```

### Semantic Tokens Provider

```typescript
const legend = new vscode.SemanticTokensLegend(
  ['keyword', 'function', 'variable', 'string', 'comment'],
  ['declaration', 'documentation', 'readonly']
);

vscode.languages.registerDocumentSemanticTokensProvider(
  { language: 'mylang' },
  {
    provideDocumentSemanticTokens(document) {
      const builder = new vscode.SemanticTokensBuilder(legend);
      const text = document.getText();
      // Parse and push tokens: builder.push(line, charOffset, length, tokenType, tokenModifiers)
      return builder.build();
    }
  },
  legend
);
```

### Signature Help Provider

```typescript
vscode.languages.registerSignatureHelpProvider('javascript', {
  provideSignatureHelp(document, position, token, context) {
    const help = new vscode.SignatureHelp();
    help.signatures = [
      new vscode.SignatureInformation(
        'func(param1: string, param2: number)',
        'Function description'
      )
    ];
    help.signatures[0].parameters = [
      new vscode.ParameterInformation('param1', 'First parameter'),
      new vscode.ParameterInformation('param2', 'Second parameter'),
    ];
    help.activeSignature = 0;
    help.activeParameter = 0;
    return help;
  }
}, ['(', ',']);
```

### Document Symbol Provider (Outline)

```typescript
vscode.languages.registerDocumentSymbolProvider('javascript', {
  provideDocumentSymbols(document, token) {
    return [
      new vscode.DocumentSymbol(
        'MyClass',
        'Class description',
        vscode.SymbolKind.Class,
        new vscode.Range(0, 0, 10, 0),
        new vscode.Range(0, 0, 0, 7)
      ),
    ];
  }
});
```

### Call Hierarchy Provider

```typescript
vscode.languages.registerCallHierarchyProvider('javascript', {
  prepareCallHierarchy(document, position) {
    const range = document.getWordRangeAtPosition(position);
    const name = document.getText(range);
    return new vscode.CallHierarchyItem(
      vscode.SymbolKind.Function,
      name, '', document.uri, range, range
    );
  },
  provideIncomingCalls(item, token) { return []; },
  provideOutgoingCalls(item, token) { return []; },
});
```
