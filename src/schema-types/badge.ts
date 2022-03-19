import { list, objectType, queryField, stringArg } from "nexus"
import { Badge } from "../../generated/nexus-prisma"
import { UserType } from "."

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

export const badgeQuery = queryField("badge", {
  type: BadgeType,
  args: {
    id: stringArg()
  },
  resolve(_, args, ctx) {
    return ctx.prisma.badge.findUnique({
      where: { id: args.id }
    })
  }
})

export const badgesQuery = queryField("badges", {
  type: list(BadgeType),
  resolve(_, args, ctx) {
    return ctx.prisma.badge.findMany()
  }
})
