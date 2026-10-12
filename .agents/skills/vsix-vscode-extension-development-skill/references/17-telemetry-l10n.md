## 17. Telemetry & Localization

### Telemetry

```typescript
const logger = vscode.env.createTelemetryLogger({
  sendEventData(eventName, properties) {
    // Send to your telemetry backend
  },
  sendErrorData(eventName, data, properties) {
    // Send error data
  },
});

// Log usage event
logger.logUsage('commandInvoked', { command: 'myExt.hello' });

// Log error
logger.logError('processingFailed', { error: 'timeout' }, { stack: '...' });
```

### Localization (l10n)

```json
// package.json
{
  "l10n": "./l10n"
}
```

```typescript
// In code
const msg = vscode.l10n.t('Hello World');
const msg2 = vscode.l10n.t('Hello {name}', { name: 'User' });
```

```json
// l10n/bundle.l10n.ja.json (Japanese bundle)
{
  "Hello World": "こんにちは世界",
  "Hello {name}": "こんにちは{name}"
}
```

In package.json, use `%key%` syntax for localizable strings:
```json
{
  "commands": [{
    "command": "myExt.hello",
    "title": "%myExt.hello.title%"
  }]
}
```
