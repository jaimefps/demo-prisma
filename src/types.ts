import * as admin from "firebase-admin"
import { authenticate } from "./auth"

export type AuthUser = admin.auth.DecodedIdToken
export type UserInfoType = UnwrapPromise<ReturnType<typeof authenticate>>
export type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never
