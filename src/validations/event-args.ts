import { UserInputError } from "apollo-server"
import moment from "moment"
import { Context } from "../context"
import { EventInputArgs } from "../data-sources"

export class EventArgs {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }
  private async getCreatedAt(args: EventInputArgs) {
    if (args.eventId) {
      const currEvent = await this.ctx.prisma.event.findUnique({
        where: { id: args.eventId }
      })
      return currEvent?.createdAt
    }
  }

  private async isValidTimeChange(args: EventInputArgs) {
    // TODO: check if PREMIUM user
    // to give different boundaries.
    const { boundEnd } = this.ctx.event.allowedTimeBoundaries()
    const eventCreatedAt = await this.getCreatedAt(args)
    return eventCreatedAt
      ? moment(eventCreatedAt).add(6, "hours").isBefore(boundEnd)
      : true
  }

  private isValidTimeBoundaries(args: EventInputArgs) {
    const { boundStart, boundEnd } = this.ctx.event.allowedTimeBoundaries()
    const isValidStart = moment(boundStart).isBefore(args.data.start)
    const isValidEnd = moment(boundEnd).isAfter(args.data.end)
    return isValidStart && isValidEnd
  }

  private async validateTime(args: EventInputArgs) {
    const isStartBeforeEnd = moment(args.data.start).isBefore(args.data.end)
    const isValidBoundaries = this.isValidTimeBoundaries(args)
    const isValidTimeChange = await this.isValidTimeChange(args)
    const isValidTime =
      isStartBeforeEnd && isValidBoundaries && isValidTimeChange
    if (!isValidTime) {
      throw new UserInputError("Invalid time range", {
        invalidArgs: ["start", "end"]
      })
    }
  }

  private async validateCategories(args: EventInputArgs) {
    // TODO: PREMIUM can add more categories
    if (args.data.categories.length > 2) {
      throw new UserInputError("Too many categories", {
        invalidArgs: ["categories"]
      })
    }
  }

  private validateText(args: EventInputArgs) {
    const { name, desc } = args.data
    if (name.length < 1 || name.length > 50) {
      throw new UserInputError("Name must be between 1 and 50 characters", {
        invalidArgs: ["name"]
      })
    }
    if (desc.length < 1 || desc.length > 400) {
      throw new UserInputError(
        "Description must be between 1 and 400 characters",
        { invalidArgs: ["desc"] }
      )
    }
  }

  private validateCoordinates(args: EventInputArgs) {
    const { lat, lng } = args.data
    const badLat = lat < -90 || lat > 90
    const badLng = lng < -180 || lng > 180
    if (badLat || badLng) {
      throw new UserInputError("Invalid location details.", {
        invalidArgs: ["lat", "lng"]
      })
    }
  }

  async check(args: EventInputArgs) {
    await Promise.all([
      this.validateTime(args),
      this.validateText(args),
      this.validateCategories(args),
      this.validateCoordinates(args)
    ])
  }
}
