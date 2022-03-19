import { list, objectType, queryField, stringArg } from "nexus"
import { Category } from "../../generated/nexus-prisma"
import { EventType, UserType } from "."

export const CategoryType = objectType({
  name: Category.$name,
  description: Category.$description,
  definition(t) {
    t.field(Category.id)
    t.field(Category.name)
    t.field(Category.desc)
    t.field(Category.createdAt)
    t.field(Category.updatedAt)
    t.connectionField("attributedUsers", {
      type: UserType,
      async nodes(parent, args, ctx) {
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
  }
})

export const categoryQuery = queryField("category", {
  type: CategoryType,
  args: {
    id: stringArg()
  },
  resolve(_, args, ctx) {
    return ctx.prisma.category.findUnique({
      where: { id: args.id }
    })
  }
})

export const categoriesQuery = queryField("categories", {
  type: list(CategoryType),
  resolve(_, args, ctx) {
    return ctx.prisma.category.findMany()
  }
})
