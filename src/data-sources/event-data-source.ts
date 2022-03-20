import { UserInputError } from "apollo-server"
import { Context } from "../context"
import moment from "moment"
import * as yup from "yup"
import { NexusGenInputs } from "../../generated/nexus-typegen"

// TODO: how to get this type programmatically
// from the Nexus "EventInputType" object
type EventInputArgs = {
  eventId?: string
  data: NexusGenInputs["EventInput"]
}

export class EventDataSource {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }

  // PRIVATE

  private async isValidTimeChange(args: EventInputArgs) {
    // TODO: check if PREMIUM user
    // to give different boundaries.
    const eventCreatedAt = await this.getCreatedAt(args)
    const { boundEnd } = this.validTimeBoundaries()
    return eventCreatedAt
      ? moment(eventCreatedAt).add(6, "hours").isBefore(boundEnd)
      : true
  }

  private async isValidTimeBoundaries(args: EventInputArgs) {
    const { boundStart, boundEnd } = this.validTimeBoundaries()
    const isStartBeforeEnd = moment(args.data.start).isBefore(args.data.end)
    const isValidStart = moment(boundStart).isBefore(args.data.start)
    const isValidEnd = moment(boundEnd).isAfter(args.data.end)
    const isValidChange = await this.isValidTimeChange(args)
    return isStartBeforeEnd && isValidStart && isValidEnd && isValidChange
  }

  private async validateTimeBoundaries(args: EventInputArgs) {
    const isValidTimes = await this.isValidTimeBoundaries(args)
    if (!isValidTimes) {
      throw new UserInputError("Invalid time range", {
        // TODO: how to check for "invalidArgs"
        // names programmatically
        invalidArgs: ["start", "end"]
      })
    }
  }

  private async validateCategories(args: EventInputArgs) {
    // TODO: PREMIUM can add more categories
    const cats = args.data.categories
    if (cats.length > 2) {
      throw new UserInputError("Too many categories", {
        // TODO: how to check for "invalidArgs"
        // names programmatically
        invalidArgs: ["categories"]
      })
    }
  }

  private async validateEventArgs(args: EventInputArgs) {
    // TODO: PREMIUM can add more tags
    this.validateCategories(args)
    await this.validateTimeBoundaries(args)
    await yup
      .object({
        name: yup.string().min(1).max(50),
        desc: yup.string().min(1).max(400),
        lat: yup.number().min(-90).max(90),
        lng: yup.number().min(-180).max(180)
      })
      .validate(args.data)
      .then((x) => console.log({ x }))
    // Allow error to be thrown:
    // .catch((e) => console.log({ e }))
  }

  // PUBLIC

  validTimeBoundaries() {
    // TODO: check if PREMIUM user
    // to give different boundaries.
    // Call moment() separately twice
    // to avoid time manipulation mixup.
    // NOTE: 1 minute of wiggle space.
    const now = moment().subtract(1, "minute")
    const nowPlusLimit = moment().add(6, "hours").add(1, "minute")
    return {
      boundStart: now.toDate(),
      boundEnd: nowPlusLimit.toDate()
    }
  }

  async getCreatedAt(args: EventInputArgs) {
    let eventCreatedAt: Date | undefined
    if (args.eventId) {
      const currEvent = await this.ctx.prisma.event.findUnique({
        where: { id: args.eventId }
      })
      eventCreatedAt = currEvent?.createdAt
    }
    return eventCreatedAt
  }

  async create(args: EventInputArgs) {
    try {
      await this.validateEventArgs(args)
      await this.ctx.prisma.event.create({
        data: {
          hostId: this.ctx.clientId,
          start: new Date(args.data.start),
          end: new Date(args.data.end),
          name: args.data.name,
          desc: args.data.desc,
          lat: args.data.lat,
          lng: args.data.lng,
          categories: {
            create: args.data.categories.map((c) => ({
              categoryId: c
            }))
          },
          attendance: {
            create: {
              userId: this.ctx.clientId
            }
          }
        }
      })
      return true
    } catch (e) {
      return false
    }
  }

  async update(args: EventInputArgs) {
    try {
      /**
       * TODO: validation is passing
       * even when it should NOT.
       */
      await this.validateEventArgs(args)
      await this.ctx.prisma.event.update({
        where: { id: args.eventId },
        data: {
          start: new Date(args.data.start),
          end: new Date(args.data.end),
          name: args.data.name,
          desc: args.data.desc,
          lat: args.data.lat,
          lng: args.data.lng,
          categories: {
            // adds any categories in list.
            upsert: args.data.categories.map((c) => ({
              where: {
                eventId_categoryId: {
                  eventId: args.eventId ?? "",
                  categoryId: c
                }
              },
              create: { categoryId: c },
              update: { categoryId: c }
            })),
            // removes all categories,
            // except items in list:
            deleteMany: {
              NOT: {
                categoryId: {
                  in: args.data.categories
                }
              }
            }
          }
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
}
