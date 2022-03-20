import {
  ApolloServer,
  AuthenticationError,
  ForbiddenError
} from "apollo-server"
import { authenticate, dangerous_authenticateDev } from "./auth"
import { Context } from "./context"
import { schema } from "./schema"

const server = new ApolloServer({
  async context({ req }) {
    const userInfo =
      process.env.NODE_ENV === "development"
        ? await dangerous_authenticateDev(req)
        : await authenticate(req)
    if (userInfo) {
      if (userInfo.dbUser.blocked) {
        throw new ForbiddenError("User blocked from application")
      }
      return new Context(userInfo)
    }
    throw new AuthenticationError("Failed to authenticate")
  },
  cors: true,
  schema
})

server.listen().then(({ url }) => {
  console.log(`Apollo: https://studio.apollographql.com/sandbox/explorer`)
  console.log(`Prisma: http://localhost:5555/`)
  console.log(`Server: ${url}`)
})
