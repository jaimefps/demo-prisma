import { PrismaClient } from "@prisma/client"

const HARDCODED_USER_ID = "57ef52a4-2624-416a-a83a-86a711f1b326"

export const prisma = new PrismaClient({
  log: ["query"]
})

type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never

type ClientInfoType = UnwrapPromise<ReturnType<typeof prisma.user.findUnique>>

export class Context {
  prisma = prisma
  userInfo: ClientInfoType = null

  /**
   * Record of the client making a request to the server.
   * Used for one time easy access and authorization verification throught the system.
   */
  async clientInfo() {
    if (this.userInfo) {
      return this.userInfo
    }
    this.userInfo = await prisma.user.findUnique({
      where: { id: HARDCODED_USER_ID }
    })
    return this.userInfo
  }
}
