import { Event } from "@prisma/client"
import { string, number, AnySchema } from "yup"

export const eventValidations: Partial<Record<keyof Event, AnySchema>> = {
  name: string().min(2).max(50),
  desc: string().min(2).max(400).optional(),
  lat: number().min(-90).max(90),
  lng: number().min(-180).max(180)
}
