import { list, nullable, objectType, queryField, stringArg } from "nexus"
import { Badge } from "../../generated/nexus-prisma"
import { Prisma } from "@prisma/client"
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
            badgesReceived: {
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
  args: {
    search: nullable(stringArg())
  },
  resolve(_, args, ctx) {
    let q: Prisma.BadgeFindManyArgs | undefined
    if (args.search) {
      q = {
        where: {
          name: {
            contains: args.search
          }
        }
      }
    }
    return ctx.prisma.badge.findMany(q)
  }
})
