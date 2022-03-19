import { mutationField, stringArg } from "nexus"

export const blockUser = mutationField("blockUser", {
  type: "Boolean",
  args: {
    userId: stringArg()
  },
  authorize(_, args, ctx) {
    // cannot block self
    return ctx.clientIsSuperuser && args.userId !== ctx.clientId
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.user.update({
        where: { id: args.userId },
        data: {
          blocked: true
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})

export const unblockUser = mutationField("unblockUser", {
  type: "Boolean",
  args: {
    userId: stringArg()
  },
  authorize(_, args, ctx) {
    // cannot block self
    return ctx.clientIsSuperuser && args.userId !== ctx.clientId
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.prisma.user.update({
        where: { id: args.userId },
        data: {
          blocked: false
        }
      })
      return true
    } catch (e) {
      return false
    }
  }
})
