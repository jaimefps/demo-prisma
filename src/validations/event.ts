import { string, number } from "yup"

export const hostId = string().required("Requires User ID of the host.")
export const name = string().min(2).max(50)
export const desc = string().min(2).max(400)
export const lat = number().min(-90).max(90)
export const lng = number().min(-180).max(180)
// export const start = // TODO start within present time.
// export const end = // TODO end not after X amount of time.
