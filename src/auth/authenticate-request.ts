import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier"
import { User } from "@prisma/client"
import { prisma } from "../prisma"
import { Request } from "express"
import { AuthSingleton } from "."

function getAuthToken(authorization: string | undefined) {
  return authorization?.split("Bearer ")[1].trim()
}

export async function authenticate(req: Request) {
  const token = getAuthToken(req.headers.authorization) ?? ""
  const authUser = await AuthSingleton.verifyToken(token ?? "")
  const authId = authUser?.uid
  if (!authId) {
    return
  }
  const dbUser = await prisma.user.upsert({
    where: {
      authId
    },
    create: {
      authId,
      username: Date.now().toString()
    },
    update: {}
  })
  if (dbUser && authUser) {
    return {
      authUser,
      dbUser
    }
  }
}

export async function dangerous_authenticateDev(req: Request) {
  console.warn(
    "\x1b[33m%s\x1b[0m",
    "WARNING: Bypassing Authentication: dangerous_authenticateDev"
  )
  // id from firebase:
  const devFirebaseUuid = "oUcexixphgYYAvcAjMKUCvtxvaA2"
  const authUser = {
    uid: devFirebaseUuid,
    email: "nene@nene.com"
  } as DecodedIdToken
  const dbUser = (await prisma.user.findUnique({
    where: { authId: devFirebaseUuid }
  })) as User
  return {
    authUser,
    dbUser
  }
}
