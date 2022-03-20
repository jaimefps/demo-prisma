import { Context } from "../context"
import { EventArgs } from "./event-args"

export class Validations {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }

  get eventArgs() {
    return new EventArgs(this.ctx)
  }
}
