import { prisma } from "./prisma"
import { UnwrapPromise } from "./types"

// TODO: Remove once Firebase auth is setup.
const HARDCODED_USER_ID = "57ef52a4-2624-416a-a83a-86a711f1b326"

export class Context {
  prisma = prisma
  userInfo: UnwrapPromise<ReturnType<typeof prisma.user.findUnique>> = null

  async clientInfo() {
    if (this.userInfo) {
      return this.userInfo
    }
    /**
     * TODO: setup Firebase auth to track client identity.
     * Record of the client making a request to the server.
     * Used for one time easy access and authorization
     * verification throughout the request call.
     */
    this.userInfo = await prisma.user.findUnique({
      where: { id: HARDCODED_USER_ID }
    })
    return this.userInfo
  }
}
