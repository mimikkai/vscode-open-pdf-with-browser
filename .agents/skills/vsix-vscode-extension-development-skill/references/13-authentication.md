## 13. Authentication

### Register Auth Provider

```typescript
vscode.authentication.registerAuthenticationProvider(
  'myAuthProvider',
  'My Auth',
  {
    async createSession(scopes: string[]) {
      const token = await getAccessToken(scopes);
      const session: vscode.AuthenticationSession = {
        id: '1',
        accessToken: token,
        account: { id: 'user-id', label: 'User' },
        scopes,
      };
      return session;
    },
    async getSessions(scopes?: string[]) {
      // Return existing sessions
      return [];
    },
    async removeSession(sessionId: string) {
      // Remove session
    },
  },
  { supportsMultipleAccounts: false }
);
```

### Use Built-in GitHub Auth

```typescript
const session = await vscode.authentication.getSession('github', ['repo', 'user'], {
  createIfNone: true,
});
if (session) {
  const octokit = new Octokit({ auth: session.accessToken });
  const user = await octokit.users.getAuthenticated();
}
```
