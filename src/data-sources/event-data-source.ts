import moment from "moment"
import { Context } from "../context"

export class EventDataSource {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }

  validTimeBoundaries() {
    // 1 minute of wiggle space:
    const now = moment().subtract(1, "minutes")
    const nowPlus6hr = now.add(6, "hours").add(1, "minutes")
    return { boundStart: now.toDate(), boundEnd: nowPlus6hr.toDate() }
  }
}
