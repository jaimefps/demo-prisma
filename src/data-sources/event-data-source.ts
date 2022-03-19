import { Context } from "../context"

export class EventDataSource {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }
}
