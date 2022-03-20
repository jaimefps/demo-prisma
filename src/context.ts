import { UserDataSource, EventDataSource } from "./data-sources"
import { UserInfoType } from "./types"
import { prisma } from "./prisma"

type ContextUserInfo = NonNullable<UserInfoType>

export class Context {
  prisma = prisma
  private authenticatedClient: ContextUserInfo

  constructor(authenticatedClient: ContextUserInfo) {
    this.authenticatedClient = authenticatedClient
  }

  get client() {
    return this.authenticatedClient
  }
  get clientId() {
    return this.client.dbUser.id
  }
  get clientIsSuperuser() {
    return this.client.dbUser.type === "SUPERUSER"
  }

  get user() {
    return new UserDataSource(this)
  }
  get event() {
    return new EventDataSource(this)
  }
}
