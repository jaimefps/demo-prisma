import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  const nena = await prisma.user.upsert({
    where: { email: "nena@prisma.io" },
    update: {},
    create: {
      username: "nena",
      email: "nena@prisma.io",
      hosting: {
        create: {
          name: "nena event name abc",
          desc: "nena event desc abc",
          start: new Date(),
          end: new Date(),
          lat: 0,
          lng: 0
        }
      }
    }
  })
  const nene = await prisma.user.upsert({
    where: { email: "nene@prisma.io" },
    update: {},
    create: {
      username: "nene",
      email: "nene@prisma.io",
      hosting: {
        create: {
          name: "nene event name abc",
          desc: "nene event desc abc",
          start: new Date(),
          end: new Date(),
          lat: 0,
          lng: 0
        }
      }
    }
  })
  const coco = await prisma.user.upsert({
    where: { email: "coco@prisma.io" },
    update: {},
    create: {
      username: "coco",
      email: "coco@prisma.io",
      hosting: {
        create: {
          name: "coco event name abc",
          desc: "coco event desc abc",
          start: new Date(),
          end: new Date(),
          lat: 0,
          lng: 0
        }
      }
    }
  })
  console.log({
    nena,
    nene,
    coco
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
