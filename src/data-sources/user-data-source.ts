import { Context } from "../context"

export class UserDataSource {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }
}
