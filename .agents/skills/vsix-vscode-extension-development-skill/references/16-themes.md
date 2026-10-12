## 16. Themes

### Color Theme

```json
{
  "contributes": {
    "themes": [
      {
        "label": "My Light Theme",
        "uiTheme": "vs",
        "path": "./themes/light.tmTheme"
      },
      {
        "label": "My Dark Theme",
        "uiTheme": "vs-dark",
        "path": "./themes/dark.tmTheme"
      }
    ]
  }
}
```

`uiTheme` values: `"vs"` (light), `"vs-dark"` (dark), `"hc-black"` (high contrast)

### File Icon Theme

```json
{
  "contributes": {
    "iconThemes": [
      { "id": "myIcons", "label": "My Icons", "path": "./icons/icon-theme.json" }
    ]
  }
}
```

### Product Icon Theme

```json
{
  "contributes": {
    "productIconThemes": [
      { "id": "my-product-icons", "label": "My Product Icons", "path": "./theme/product-icon-theme.json" }
    ]
  }
}
```

### Themable Colors from Extension

```json
{
  "contributes": {
    "colors": [
      {
        "id": "myExt.highlightBackground",
        "description": "Background color for highlights",
        "defaults": {
          "light": "#FF000055",
          "dark": "#FF000055",
          "highContrast": "#FF0000"
        }
      }
    ]
  }
}
```

Use in code:
```typescript
const color = new vscode.ThemeColor('myExt.highlightBackground');
const decorationType = vscode.window.createTextEditorDecorationType({
  backgroundColor: color,
});
```
