import { makeSchema, connectionPlugin } from "nexus";
import { ApolloServer } from "apollo-server";
import * as SchemaTypes from "./types";
import { Context } from "./context";
import path, { join } from "path";

const schema = makeSchema({
  outputs: {
    typegen: join(__dirname, "../generated/nexus-typegen.ts"),
    schema: join(__dirname, "../generated/schema.graphql"),
  },
  contextType: {
    module: path.join(__dirname, "./context.ts"),
    export: "Context",
  },
  types: [...Object.values(SchemaTypes)],
  plugins: [connectionPlugin()],
});

const server = new ApolloServer({
  context: new Context(),
  cors: true,
  schema,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
