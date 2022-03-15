import { prisma } from "../prisma"

export const userCanMutateEvent = async ({
  eventId,
  userId
}: {
  eventId: string
  userId: string | undefined
}) => {
  if (!userId) return false
  const event = await prisma.event.findUnique({ where: { id: eventId } })
  return event ? event.id === userId : false
}
