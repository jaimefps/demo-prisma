import { EventInputArgs } from "../types"
import { Context } from "../context"
import moment from "moment"

export class EventDataSource {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }

  allowedTimeBoundaries() {
    // TODO: check if PREMIUM user
    // to give different boundaries.
    // NOTE: Call moment() separately twice
    // to avoid time manipulation mixup.
    // NOTE: 1 minute of wiggle space.
    const now = moment().subtract(1, "minute")
    const nowPlusLimit = moment().add(6, "hours").add(1, "minute")
    return { boundStart: now.toDate(), boundEnd: nowPlusLimit.toDate() }
  }

  async create(args: EventInputArgs) {
    try {
      await this.ctx.validation.eventArgs.check(args)
      await this.ctx.prisma.event.create({
        data: {
          hostId: this.ctx.clientId,
          start: moment(args.data.start).toDate(),
          end: moment(args.data.end).toDate(),
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
      await this.ctx.validation.eventArgs.check(args)
      await this.ctx.prisma.event.update({
        where: { id: args.eventId },
        data: {
          start: moment(args.data.start).toDate(),
          end: moment(args.data.end).toDate(),
          name: args.data.name,
          desc: args.data.desc,
          lat: args.data.lat,
          lng: args.data.lng,
          categories: {
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
