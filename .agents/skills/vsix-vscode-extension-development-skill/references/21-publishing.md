## 21. Publishing

### Install vsce

```bash
npm install -g @vscode/vsce
```

### Create Publisher

```bash
vsce create-publisher your-publisher-name
vsce login your-publisher-name
```

### Package as VSIX

```bash
vsce package
# Creates: my-extension-0.0.1.vsix
```

### Publish to Marketplace

```bash
vsce publish
vsce publish minor  # Bump minor version and publish
vsce publish patch  # Bump patch version and publish
```

### Install VSIX Locally

```bash
code --install-extension my-extension-0.0.1.vsix
```

### package.json Requirements for Publishing

```json
{
  "publisher": "your-publisher-name",
  "repository": { "type": "git", "url": "https://github.com/you/repo" },
  "license": "MIT",
  "icon": "images/icon.png",
  "galleryBanner": { "color": "#1e1e1e", "theme": "dark" },
  "keywords": ["vscode", "extension", "utility"],
  "categories": ["Programming Languages", "Snippets"]
}
```
