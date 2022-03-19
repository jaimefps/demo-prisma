import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// See firebase account users
// for this list of ids.
const authIdMap = {
  nena: "VtCkxdatybc42FbQoN7onzqq8Rr2",
  nene: "oUcexixphgYYAvcAjMKUCvtxvaA2",
  coco: "ntMaxozmuNbKfjl14DQpbFZmX3M2"
} as const

function makeUserWithEvent(name: keyof typeof authIdMap) {
  const authId = authIdMap[name]
  return {
    where: { authId },
    update: {},
    create: {
      authId,
      username: `${name}`,
      hosting: {
        create: {
          name: `${name} event name abc`,
          desc: `${name} event desc abc`,
          start: new Date(),
          end: new Date(),
          lat: 0,
          lng: 0
        }
      }
    }
  }
}

async function main() {
  const inserts = [
    prisma.user.upsert(makeUserWithEvent("nena")),
    prisma.user.upsert(makeUserWithEvent("nene")),
    prisma.user.upsert(makeUserWithEvent("coco")),
    prisma.category.upsert({
      where: {
        name: "comedy"
      },
      update: {},
      create: {
        name: "comedy",
        desc: "Where language is used to push the boundaries of our comfort and induce laughter along the way."
      }
    }),
    prisma.category.upsert({
      where: {
        name: "music"
      },
      update: {},
      create: {
        name: "music",
        desc: "That art form that is as old as time."
      }
    }),
    prisma.badge.upsert({
      where: {
        name: "musician"
      },
      update: {},
      create: {
        name: "musician",
        desc: "Others have recognized how your art breaks through the silence."
      }
    }),
    prisma.badge.upsert({
      where: {
        name: "comedian"
      },
      update: {},
      create: {
        name: "comedian",
        desc: "Others have recognized how your art brings laughter to the quiet."
      }
    })
  ]
  await Promise.all(inserts)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
