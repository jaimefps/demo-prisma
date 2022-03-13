import { makeSchema, connectionPlugin, fieldAuthorizePlugin } from "nexus"
import { ApolloServer } from "apollo-server"
import * as SchemaTypes from "./types"
import { Context } from "./context"
import path, { join } from "path"

const schema = makeSchema({
  outputs: {
    typegen: join(__dirname, "../generated/nexus-typegen.ts"),
    schema: join(__dirname, "../generated/schema.graphql")
  },
  contextType: {
    module: path.join(__dirname, "./context.ts"),
    export: "Context"
  },
  plugins: [
    fieldAuthorizePlugin(),
    connectionPlugin({
      validateArgs(args, info) {
        return true
      },
      includeNodesField: true,
      extendConnection: {
        totalCount: { type: "Int" }
      }
    })
  ],
  types: [...Object.values(SchemaTypes)]
})

const server = new ApolloServer({
  context: async ({ req, res }) => {
    // use req & res here for atuh and metrics analysis:
    async function findOrCreateUser() {}
    return new Context()
  },
  cors: true,
  schema
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
