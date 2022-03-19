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
  const fullyAuthenticated = dbUser && authUser
  const userInfo = { authUser, dbUser }
  return fullyAuthenticated ? userInfo : null
}

// id from firebase:
const devFirebaseUuid = "oUcexixphgYYAvcAjMKUCvtxvaA2"
export async function dangerous_authenticateDev(req: Request) {
  console.warn("!! Bypassing Firebase Auth: dangerous_authenticateDev !!")
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
