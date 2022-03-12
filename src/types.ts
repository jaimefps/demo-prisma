import {
  objectType,
  asNexusMethod,
  queryField,
  stringArg,
  nonNull,
} from "nexus";
import { User, Event } from "../generated/nexus-prisma";
import { DateTimeResolver } from "graphql-scalars";
import { GraphQLScalarType } from "graphql";

export const DateType = asNexusMethod(
  new GraphQLScalarType(DateTimeResolver),
  "dateTime"
);

export const EventType = objectType({
  name: Event.$name,
  description: Event.$description,
  definition(t) {
    t.field(Event.name);
    // t.string("iDontExist"); // invalid field name
    // t.nonNull.string("name"); // invalid field type
  },
});

export const UserType = objectType({
  name: User.$name,
  definition(t) {
    // t.field(User.id);
    // t.field(User.email);
    // t.field(User.events)
    // t.field(User.username);
    // t.field(User.createdAt);
    t.nonNull.string("id");
    t.nonNull.list.nonNull.field("events", {
      type: EventType,
      resolve: (parent, args, context) => {
        return context.prisma.user
          .findUnique({ where: { id: parent.id } })
          .events();
      },
    });
    t.nonNull.int("eventsCount", {
      resolve: async (parent, args, context) => {
        const res = await context.prisma.user.findUnique({
          where: { id: parent.id },
          select: {
            _count: {
              select: { events: true },
            },
          },
        });
        return res?._count.events ?? 0;
      },
    });
  },
});

export const userQuery = queryField("user", {
  type: UserType,
  args: {
    id: nonNull(stringArg()),
  },
  resolve(_, args, context) {
    return context.prisma.user.findUnique({
      where: { id: args.id },
    });
  },
});

export const HelloWorld = objectType({
  name: "HelloWorld",
  definition(t) {
    t.string("speak", {
      resolve() {
        return "HelloWorld";
      },
    });
  },
});

export const helloQuery = queryField("helloWorld", {
  type: HelloWorld,
  resolve() {
    return {};
  },
});
