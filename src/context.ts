import { UserDataSource, EventDataSource } from "./data-sources"
import { UserInfoType } from "./types"
import { prisma } from "./prisma"

type UserInfoNonNullType = NonNullable<UserInfoType>

export class Context {
  private requestUser: UserInfoNonNullType
  private prismaClient = prisma

  constructor(requestUser: UserInfoNonNullType) {
    this.requestUser = requestUser
  }

  get prisma() {
    return this.prismaClient
  }
  get client() {
    return this.requestUser
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
