import { objectType, queryField } from "nexus"

export const HelloWorldType = objectType({
  name: "HelloWorld",
  definition(t) {
    t.string("test")
  }
})

export const helloWorldQuery = queryField("helloWorld", {
  type: HelloWorldType,
  resolve() {
    return {
      test: "HelloWorld"
    }
  }
})
