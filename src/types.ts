import { User, Event, Category, Badge } from "../generated/nexus-prisma"
import { userCanMutateEvent } from "./data-sources/user"
import { DateTimeResolver } from "graphql-scalars"
import { GraphQLScalarType } from "graphql"
import {
  asNexusMethod,
  floatArg,
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg
} from "nexus"

export const HelloWorldType = objectType({
  name: "HelloWorld",
  definition(t) {
    t.string("test")
  }
})

export const helloWorldQuery = queryField("helloWorld", {
  type: HelloWorldType,
  resolve() {
    return {
      test: "HelloWorld"
    }
  }
})

// Scalar for compatibility
// between Prisma and Nexus:
export const DateType = asNexusMethod(
  new GraphQLScalarType(DateTimeResolver),
  "dateTime"
)

export const BadgeType = objectType({
  name: Badge.$name,
  description: Badge.$description,
  definition(t) {
    t.field(Badge.id)
    t.field(Badge.name)
    t.field(Badge.desc)
    t.field(Badge.createdAt)
    t.field(Badge.updatedAt)
    t.connectionField("attributedUsers", {
      type: UserType,
      nodes(parent, args, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            badges: {
              some: {
                badge: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.badgesOnUsers.count({
          where: { badgeId: parent.id }
        })
      }
    })
  }
})

export const CategoryType = objectType({
  name: Category.$name,
  description: Category.$description,
  definition(t) {
    t.field(Category.id)
    t.field(Category.name)
    t.field(Category.desc)
    t.field(Category.createdAt)
    t.field(Category.updatedAt)
    t.connectionField("attributedEvents", {
      type: EventType,
      nodes(parent, args, ctx) {
        return ctx.prisma.event.findMany({
          where: {
            categories: {
              some: {
                category: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.categoriesOnEvents.count({
          where: { categoryId: parent.id }
        })
      }
    })
    t.connectionField("attributedUsers", {
      type: UserType,
      nodes(parent, args, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            categories: {
              some: {
                category: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.categoriesOnUsers.count({
          where: { categoryId: parent.id }
        })
      }
    })
  }
})

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
            attendance: {
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

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id)
    t.field(User.email)
    t.field(User.events)
    t.field(User.username)
    t.field(User.createdAt)
    t.field(User.updatedAt)
    t.field(User.verified)
    t.connectionField("events", {
      type: EventType,
      nodes(parent, args, ctx) {
        return ctx.prisma.event.findMany({
          where: { hostId: parent.id }
        })
      },
      async totalCount(parent, args, ctx) {
        return ctx.prisma.event.count({
          where: { hostId: parent.id }
        })
      }
    })
    t.connectionField("badges", {
      type: BadgeType,
      nodes(parent, args, ctx) {
        return ctx.prisma.badge.findMany({
          where: {
            attributions: {
              some: {
                user: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.badgesOnUsers.count({
          where: { userId: parent.id }
        })
      }
    })
    t.connectionField("attendance", {
      type: EventType,
      nodes(parent, args, ctx) {
        return ctx.prisma.event.findMany({
          where: {
            attendance: {
              some: {
                user: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.usersInEvents.count({
          where: { userId: parent.id }
        })
      }
    })
    t.connectionField("attributedCategories", {
      type: CategoryType,
      nodes(parent, args, ctx) {
        return ctx.prisma.category.findMany({
          where: {
            userAttributions: {
              some: {
                user: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.categoriesOnUsers.count({
          where: { userId: parent.id }
        })
      }
    })
    t.connectionField("followers", {
      type: UserType,
      nodes(parent, args, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            following: {
              some: {
                target: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.fandom.count({
          where: { targetId: parent.id }
        })
      }
    })
    t.connectionField("following", {
      type: UserType,
      nodes(parent, args, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            followers: {
              some: {
                fan: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.fandom.count({
          where: { fanId: parent.id }
        })
      }
    })
  }
})

export const userQuery = queryField("user", {
  type: UserType,
  args: {
    id: nonNull(stringArg())
  },
  resolve(_, args, ctx) {
    return ctx.prisma.user.findUnique({
      where: { id: args.id }
    })
  }
})

export const usersQuery = queryField("users", {
  type: nonNull(list(UserType)),
  resolve(_, args, ctx) {
    return ctx.prisma.user.findMany({
      take: 10
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
  type: nonNull(list(EventType)),
  resolve(_, args, ctx) {
    return ctx.prisma.event.findMany({
      take: 10
    })
  }
})

export const badgeQuery = queryField("badge", {
  type: BadgeType,
  args: {
    id: nonNull(stringArg())
  },
  resolve(_, args, ctx) {
    return ctx.prisma.badge.findUnique({
      where: { id: args.id }
    })
  }
})

export const badgesQuery = queryField("badges", {
  type: nonNull(list(BadgeType)),
  resolve(_, args, ctx) {
    return ctx.prisma.badge.findMany()
  }
})

export const categoryQuery = queryField("category", {
  type: CategoryType,
  args: {
    id: nonNull(stringArg())
  },
  resolve(_, args, ctx) {
    return ctx.prisma.category.findUnique({
      where: { id: args.id }
    })
  }
})

export const categoriesQuery = queryField("categories", {
  type: nonNull(list(CategoryType)),
  resolve(_, args, ctx) {
    return ctx.prisma.category.findMany()
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
  async resolve(_, args, ctx) {
    const clientInfo = await ctx.clientInfo()
    if (clientInfo) {
      await ctx.prisma.event.create({
        data: {
          hostId: clientInfo.id,
          start: new Date(args.start),
          end: new Date(args.end),
          name: args.name,
          desc: args.desc,
          lat: args.lat,
          lng: args.lng,
          attendance: {
            create: {
              userId: clientInfo.id
            }
          }
        }
      })
      return true
    }
    return false
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
