## 15. Snippets & Language Config

### Snippet Contribution (package.json)

```json
{
  "contributes": {
    "snippets": [
      {
        "language": "javascript",
        "path": "./snippets/javascript.json"
      }
    ]
  }
}
```

### Snippet File Format

```json
{
  "Console Log": {
    "prefix": "log",
    "body": [
      "console.log('$1', $2);",
      "$0"
    ],
    "description": "Log output to console"
  },
  "If Statement": {
    "prefix": "if",
    "body": [
      "if (${1:condition}) {",
      "\t$0",
      "}"
    ],
    "description": "If statement"
  }
}
```

### Language Configuration

```json
{
  "contributes": {
    "languages": [
      {
        "id": "mylang",
        "extensions": [".mylang"],
        "aliases": ["My Language", "mylang"],
        "configuration": "./language-configuration.json"
      }
    ]
  }
}
```

### language-configuration.json

```json
{
  "comments": {
    "lineComment": "//",
    "blockComment": ["/*", "*/"]
  },
  "brackets": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  "autoClosingPairs": [
    { "open": "{", "close": "}" },
    { "open": "[", "close": "]" },
    { "open": "(", "close": ")" },
    { "open": "'", "close": "'", "notIn": ["string", "comment"] },
    { "open": "\"", "close": "\"", "notIn": ["string"] },
    { "open": "`", "close": "`", "notIn": ["string", "comment"] }
  ],
  "autoCloseBefore": ";:.,=}])> \n\t",
  "surroundingPairs": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["'", "'"],
    ["\"", "\""],
    ["`", "`"]
  ],
  "folding": {
    "markers": {
      "start": "^\\s*//\\s*#region\\b",
      "end": "^\\s*//\\s*#endregion\\b"
    }
  },
  "wordPattern": "(-?\\d*\\.\\d\\w*)|([^\\`~!@#%^&*()\\-=+[{]}\\\\|;:'\",.<>/?\\s]+)",
  "indentationRules": {
    "increaseIndentPattern": "\\{\\s*$",
    "decreaseIndentPattern": "^\\s*\\}"
  }
}
```
