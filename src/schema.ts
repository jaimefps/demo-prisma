import { makeSchema, connectionPlugin, fieldAuthorizePlugin } from "nexus"
import * as SchemaTypes from "./schema-types"
import path, { join } from "path"

export const schema = makeSchema({
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
      includeNodesField: true,
      extendConnection: {
        totalCount: { type: "Int" }
      },
      validateArgs(args, info) {
        // TODO: Review and update "connection
        // validations" for pagination patterns.
        // https://nexusjs.org/docs/plugins/connection#argument-validation
        return true
      }
    })
  ],
  nonNullDefaults: {
    input: true,
    output: false
  },
  types: [...Object.values(SchemaTypes)]
})
