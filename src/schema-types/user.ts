import { User } from "../../generated/nexus-prisma"
import { list, nonNull, objectType, queryField, stringArg } from "nexus"
import { BadgeType, CategoryType, EventType } from "."

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id)
    t.field(User.email)
    t.field(User.username)
    t.field(User.createdAt)
    t.field(User.updatedAt)
    t.field(User.verified)
    t.connectionField("hosting", {
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
    t.connectionField("attending", {
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
  type: list(UserType),
  resolve(_, args, ctx) {
    return ctx.prisma.user.findMany()
  }
})
