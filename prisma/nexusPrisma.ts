import { settings } from "nexus-prisma/generator"
import { join } from "path"

settings({
  output: join(__dirname, "../generated/nexus-prisma")
})
