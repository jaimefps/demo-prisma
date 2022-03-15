import { Event } from "../../generated/nexus-prisma"
import { userCanMutateEvent } from "../data-sources/user"
import { UserType, CategoryType } from "."
import {
  floatArg,
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg
} from "nexus"

export const EventType = objectType({
  name: Event.$name,
  description: Event.$description,
  definition(t) {
    t.field(Event.id)
    t.field(Event.name)
    t.field(Event.desc)
    t.field(Event.host)
    t.field(Event.hostId)
    t.field(Event.lat)
    t.field(Event.lng)
    t.field(Event.start)
    t.field(Event.end)
    t.field(Event.createdAt)
    t.field(Event.updatedAt)
    t.connectionField("categories", {
      type: CategoryType,
      nodes(parent, args, ctx) {
        return ctx.prisma.category.findMany({
          where: {
            eventAttributions: {
              some: {
                event: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.categoriesOnEvents.count({
          where: { eventId: parent.id }
        })
      }
    })
    t.connectionField("attendees", {
      type: UserType,
      async nodes(parent, args, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            attending: {
              some: {
                event: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      async totalCount(parent, args, ctx) {
        return ctx.prisma.usersInEvents.count({
          where: {
            eventId: parent.id
          }
        })
      }
    })
  }
})

export const eventQuery = queryField("event", {
  type: EventType,
  args: {
    id: nonNull(stringArg())
  },
  resolve(_, args, ctx) {
    return ctx.prisma.event.findUnique({
      where: { id: args.id }
    })
  }
})

export const eventsQuery = queryField("events", {
  type: list(EventType),
  resolve(_, args, ctx) {
    return ctx.prisma.event.findMany()
  }
})

export const createEvent = mutationField("createEvent", {
  type: "Boolean",
  args: {
    name: stringArg(),
    desc: stringArg(),
    lat: floatArg(),
    lng: floatArg(),
    start: stringArg(),
    end: stringArg()
  },
  async authorize(_, args, ctx) {
    const clientInfo = await ctx.clientInfo()
    return Boolean(clientInfo)
  },
  async resolve(_, args, ctx) {
    try {
      const clientInfo = await ctx.clientInfo()
      const clientId = clientInfo?.id as string
      await ctx.prisma.event.create({
        data: {
          hostId: clientId,
          start: new Date(args.start),
          end: new Date(args.end),
          name: args.name,
          desc: args.desc,
          lat: args.lat,
          lng: args.lng,
          attendance: {
            create: {
              userId: clientId
            }
          }
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})

export const updateEvent = mutationField("updateEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg(),
    name: stringArg(),
    desc: stringArg(),
    lat: floatArg(),
    lng: floatArg(),
    start: stringArg(),
    end: stringArg()
  },
  async authorize(_, args, ctx) {
    const clientInfo = await ctx.clientInfo()
    return userCanMutateEvent({
      eventId: args.eventId,
      userId: clientInfo?.id
    })
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.event.update({
        where: { id: args.eventId },
        data: {
          start: new Date(args.start),
          end: new Date(args.end),
          name: args.name,
          desc: args.desc,
          lat: args.lat,
          lng: args.lng
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})

export const deleteEvent = mutationField("deleteEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg()
  },
  async authorize(_, args, ctx) {
    const clientInfo = await ctx.clientInfo()
    return userCanMutateEvent({
      eventId: args.eventId,
      userId: clientInfo?.id
    })
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.event.delete({
        where: { id: args.eventId }
      })
      return true
    } catch (e) {
      return false
    }
  }
})
