## Event Prospector Server

### To run locally:

1. `.env` file that contains you local BD connection url, e.g.:

```
DATABASE_URL="postgresql://jaimepericassaez:@localhost:5432/demo_prisma"
```

2. `./src/secrets/index.ts` that exports a firebase config.

```
export const firebase = {
  credentials: {
    type: "...",
    project_id: "...",
    private_key_id: "...",
    private_key:  "...",
    client_email: "...",
    client_id: "...",
    auth_uri: "...",
    token_uri: "...",
    auth_provider_x509_cert_url: "...",
    client_x509_cert_url: "..."
  }
}
```

3. start the local server

```
$ yarn install
$ yarn migrate
$ yarn dev
```

4. See the server logs for links to Graphiql and Prisma Studio.
