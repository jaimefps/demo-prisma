import {
  arg,
  inputObjectType,
  list,
  mutationField,
  objectType,
  queryField,
  stringArg
} from "nexus"
import { Event } from "../../generated/nexus-prisma"
import { UserType, CategoryType } from "."

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
    t.connectionField("likers", {
      type: UserType,
      nodes(parent, args, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            likes: {
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
        return ctx.prisma.userLikesEvent.count({
          where: { eventId: parent.id }
        })
      }
    })
  }
})

export const eventQuery = queryField("event", {
  type: EventType,
  args: {
    id: stringArg()
  },
  resolve(_, args, ctx) {
    return ctx.prisma.event.findUnique({
      where: {
        id: args.id
      }
    })
  }
})

export const eventsQuery = queryField("events", {
  type: list(EventType),
  resolve(_, args, ctx) {
    const { boundStart, boundEnd } = ctx.event.allowedTimeBoundaries()
    return ctx.prisma.event.findMany({
      where: {
        OR: [
          { AND: [{ start: { gt: boundStart } }, { start: { lt: boundEnd } }] },
          { AND: [{ end: { gt: boundStart } }, { end: { lt: boundEnd } }] }
        ]
      }
    })
  }
})

export const EventInputType = inputObjectType({
  name: "EventInput",
  definition(t) {
    t.string("name")
    t.string("desc")
    t.float("lat")
    t.float("lng")
    t.string("start")
    t.string("end")
    t.list.string("categories")
  }
})

export const createEvent = mutationField("createEvent", {
  type: "Boolean",
  args: {
    data: arg({ type: EventInputType })
  },
  async resolve(_, args, ctx) {
    return ctx.event.create(args)
  }
})

export const updateEvent = mutationField("updateEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg(),
    data: arg({ type: EventInputType })
  },
  async authorize(_, args, ctx) {
    const event = await ctx.prisma.event.findUnique({
      where: { id: args.eventId }
    })
    // only host can update event:
    return event?.hostId === ctx.clientId
  },
  async resolve(_, args, ctx) {
    return ctx.event.update(args)
  }
})

export const deleteEvent = mutationField("deleteEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg()
  },
  async authorize(_, args, ctx) {
    const event = await ctx.prisma.event.findUnique({
      where: { id: args.eventId }
    })
    // only host should delete event:
    return event?.hostId === ctx.clientId || ctx.clientIsSuperuser
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

export const joinEvent = mutationField("joinEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg()
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.usersInEvents.create({
        data: {
          eventId: args.eventId,
          userId: ctx.clientId
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})

export const leaveEvent = mutationField("leaveEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg()
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.usersInEvents.delete({
        where: {
          userId_eventId: {
            eventId: args.eventId,
            userId: ctx.clientId
          }
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})

export const likeEvent = mutationField("likeEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg()
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.userLikesEvent.create({
        data: {
          userId: ctx.clientId,
          eventId: args.eventId
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})

export const unlikeEvent = mutationField("unlikeEvent", {
  type: "Boolean",
  args: {
    eventId: stringArg()
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.userLikesEvent.delete({
        where: {
          userId_eventId: {
            userId: ctx.clientId,
            eventId: args.eventId
          }
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})
