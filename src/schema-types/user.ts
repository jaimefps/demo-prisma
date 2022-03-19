import { list, mutationField, objectType, queryField, stringArg } from "nexus"
import { BadgeType, CategoryType, EventType } from "."
import { User } from "../../generated/nexus-prisma"

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id)
    t.field(User.username)
    t.field(User.createdAt)
    t.field(User.updatedAt)
    t.field(User.verified)
    t.connectionField("likes", {
      type: EventType,
      nodes(parent, args, ctx) {
        return ctx.prisma.event.findMany({
          where: {
            likes: {
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
        return ctx.prisma.userLikesEvent.count({
          where: { userId: parent.id }
        })
      }
    }),
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
                celeb: {
                  id: parent.id
                }
              }
            }
          }
        })
      },
      totalCount(parent, args, ctx) {
        return ctx.prisma.fandom.count({
          where: { celebId: parent.id }
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
    id: stringArg()
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

export const followUser = mutationField("followUser", {
  type: "Boolean",
  args: {
    celebId: stringArg()
  },
  authorize(_, args, ctx) {
    // cannot follow self
    return args.celebId !== ctx.clientId
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.fandom.create({
        data: {
          fanId: ctx.clientId,
          celebId: args.celebId
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})

export const unfollowUser = mutationField("unfollowUser", {
  type: "Boolean",
  args: {
    celebId: stringArg()
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.fandom.delete({
        where: {
          fanId_celebId: {
            fanId: ctx.clientId,
            celebId: args.celebId
          }
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})
