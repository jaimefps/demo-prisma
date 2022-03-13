import { makeSchema, connectionPlugin, fieldAuthorizePlugin } from "nexus"
import { validatePlugin } from "nexus-validate"
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
    validatePlugin(),
    fieldAuthorizePlugin(),
    connectionPlugin({
      validateArgs(args, info) {
        /**
         * TODO: Review and update
         * connection validation for
         * pagination pattens.
         */
        return true
      },
      includeNodesField: true,
      extendConnection: {
        totalCount: { type: "Int" }
      }
    })
  ],
  nonNullDefaults: {
    input: true,
    output: false
  },
  types: [...Object.values(SchemaTypes)]
})

const server = new ApolloServer({
  context: async ({ req, res }) => {
    // use req & res here for auth and metrics analysis:
    async function findOrCreateUser() {}
    return new Context()
  },
  cors: true,
  schema
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
