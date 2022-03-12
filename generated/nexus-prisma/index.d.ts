import * as NexusCore from 'nexus/dist/core'

//
//
// TYPES
// TYPES
// TYPES
// TYPES
//
//

// Models

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `User`.
  *
  * ### ️⚠️ You have not writen documentation for model User
  *
  * Replace this default advisory JSDoc with your own documentation about model User
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model User {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { User } from 'nexus-prisma'
  *
  * objectType({
  *   name: User.$name
  *   description: User.$description
  *   definition(t) {
  *     t.field(User.id)
  *   }
  * })
  */
export interface User {
  $name: 'User'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.id`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.type`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   type  AccountType
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.type)
    *   }
    * })
    */
  type: {
    /**
     * The name of this field.
     */
    name: 'type'
  
    /**
     * The type of this field.
     */
    type: 'AccountType' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'AccountType'>
    : 'Warning/Error: The type \'AccountType\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'AccountType\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.verified`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   verified  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.verified)
    *   }
    * })
    */
  verified: {
    /**
     * The name of this field.
     */
    name: 'verified'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'verified'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.username`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   username  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.username)
    *   }
    * })
    */
  username: {
    /**
     * The name of this field.
     */
    name: 'username'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'username'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.email`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   email  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.email)
    *   }
    * })
    */
  email: {
    /**
     * The name of this field.
     */
    name: 'email'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'email'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'createdAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.updatedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   updatedAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.updatedAt)
    *   }
    * })
    */
  updatedAt: {
    /**
     * The name of this field.
     */
    name: 'updatedAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'updatedAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.events`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   events  Event
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.events)
    *   }
    * })
    */
  events: {
    /**
     * The name of this field.
     */
    name: 'events'
  
    /**
     * The type of this field.
     */
    type: 'Event' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Event'> | NexusCore.NexusNonNullDef<'Event'>)
    : 'Warning/Error: The type \'Event\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Event\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'events'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.rsvps`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   rsvps  UsersInEvents
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.rsvps)
    *   }
    * })
    */
  rsvps: {
    /**
     * The name of this field.
     */
    name: 'rsvps'
  
    /**
     * The type of this field.
     */
    type: 'UsersInEvents' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'UsersInEvents'> | NexusCore.NexusNonNullDef<'UsersInEvents'>)
    : 'Warning/Error: The type \'UsersInEvents\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UsersInEvents\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'rsvps'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.badges`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   badges  BadgesOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.badges)
    *   }
    * })
    */
  badges: {
    /**
     * The name of this field.
     */
    name: 'badges'
  
    /**
     * The type of this field.
     */
    type: 'BadgesOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'BadgesOnUsers'> | NexusCore.NexusNonNullDef<'BadgesOnUsers'>)
    : 'Warning/Error: The type \'BadgesOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'BadgesOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'badges'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.interests`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   interests  CategoriesOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.interests)
    *   }
    * })
    */
  interests: {
    /**
     * The name of this field.
     */
    name: 'interests'
  
    /**
     * The type of this field.
     */
    type: 'CategoriesOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'CategoriesOnUsers'> | NexusCore.NexusNonNullDef<'CategoriesOnUsers'>)
    : 'Warning/Error: The type \'CategoriesOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'CategoriesOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'interests'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Event`.
  *
  * ### ️⚠️ You have not writen documentation for model Event
  *
  * Replace this default advisory JSDoc with your own documentation about model Event
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Event {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Event } from 'nexus-prisma'
  *
  * objectType({
  *   name: Event.$name
  *   description: Event.$description
  *   definition(t) {
  *     t.field(Event.id)
  *   }
  * })
  */
export interface Event {
  $name: 'Event'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.name`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.desc`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   desc  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.desc)
    *   }
    * })
    */
  desc: {
    /**
     * The name of this field.
     */
    name: 'desc'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'desc'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.lat`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   lat  Float
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.lat)
    *   }
    * })
    */
  lat: {
    /**
     * The name of this field.
     */
    name: 'lat'
  
    /**
     * The type of this field.
     */
    type: 'Float' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Float'>
    : 'Warning/Error: The type \'Float\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Float\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'lat'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.lng`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   lng  Float
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.lng)
    *   }
    * })
    */
  lng: {
    /**
     * The name of this field.
     */
    name: 'lng'
  
    /**
     * The type of this field.
     */
    type: 'Float' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Float'>
    : 'Warning/Error: The type \'Float\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Float\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'lng'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.start`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   start  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.start)
    *   }
    * })
    */
  start: {
    /**
     * The name of this field.
     */
    name: 'start'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'start'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.end`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   end  DateTime?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.end)
    *   }
    * })
    */
  end: {
    /**
     * The name of this field.
     */
    name: 'end'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'end'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.hostId`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   hostId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.hostId)
    *   }
    * })
    */
  hostId: {
    /**
     * The name of this field.
     */
    name: 'hostId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'hostId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.host`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   host  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.host)
    *   }
    * })
    */
  host: {
    /**
     * The name of this field.
     */
    name: 'host'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'host'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.rsvps`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   rsvps  UsersInEvents
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.rsvps)
    *   }
    * })
    */
  rsvps: {
    /**
     * The name of this field.
     */
    name: 'rsvps'
  
    /**
     * The type of this field.
     */
    type: 'UsersInEvents' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'UsersInEvents'> | NexusCore.NexusNonNullDef<'UsersInEvents'>)
    : 'Warning/Error: The type \'UsersInEvents\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UsersInEvents\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'rsvps'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.tags`.
    *
    * ### ️⚠️ You have not writen documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   tags  CategoriesOnEvents
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.tags)
    *   }
    * })
    */
  tags: {
    /**
     * The name of this field.
     */
    name: 'tags'
  
    /**
     * The type of this field.
     */
    type: 'CategoriesOnEvents' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'CategoriesOnEvents'> | NexusCore.NexusNonNullDef<'CategoriesOnEvents'>)
    : 'Warning/Error: The type \'CategoriesOnEvents\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'CategoriesOnEvents\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'tags'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Category`.
  *
  * ### ️⚠️ You have not writen documentation for model Category
  *
  * Replace this default advisory JSDoc with your own documentation about model Category
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Category {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Category } from 'nexus-prisma'
  *
  * objectType({
  *   name: Category.$name
  *   description: Category.$description
  *   definition(t) {
  *     t.field(Category.id)
  *   }
  * })
  */
export interface Category {
  $name: 'Category'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.name`.
    *
    * ### ️⚠️ You have not writen documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.desc`.
    *
    * ### ️⚠️ You have not writen documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   desc  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.desc)
    *   }
    * })
    */
  desc: {
    /**
     * The name of this field.
     */
    name: 'desc'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'desc'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.onUsers`.
    *
    * ### ️⚠️ You have not writen documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   onUsers  CategoriesOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.onUsers)
    *   }
    * })
    */
  onUsers: {
    /**
     * The name of this field.
     */
    name: 'onUsers'
  
    /**
     * The type of this field.
     */
    type: 'CategoriesOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'CategoriesOnUsers'> | NexusCore.NexusNonNullDef<'CategoriesOnUsers'>)
    : 'Warning/Error: The type \'CategoriesOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'CategoriesOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'onUsers'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Category.onEvets`.
    *
    * ### ️⚠️ You have not writen documentation for model Category
    *
    * Replace this default advisory JSDoc with your own documentation about model Category
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Category {
    *   /// Lorem ipsum dolor sit amet.
    *   onEvets  CategoriesOnEvents
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Category } from 'nexus-prisma'
    *
    * objectType({
    *   name: Category.$name
    *   description: Category.$description
    *   definition(t) {
    *     t.field(Category.onEvets)
    *   }
    * })
    */
  onEvets: {
    /**
     * The name of this field.
     */
    name: 'onEvets'
  
    /**
     * The type of this field.
     */
    type: 'CategoriesOnEvents' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'CategoriesOnEvents'> | NexusCore.NexusNonNullDef<'CategoriesOnEvents'>)
    : 'Warning/Error: The type \'CategoriesOnEvents\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'CategoriesOnEvents\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Category', 'onEvets'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Badge`.
  *
  * ### ️⚠️ You have not writen documentation for model Badge
  *
  * Replace this default advisory JSDoc with your own documentation about model Badge
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Badge {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Badge } from 'nexus-prisma'
  *
  * objectType({
  *   name: Badge.$name
  *   description: Badge.$description
  *   definition(t) {
  *     t.field(Badge.id)
  *   }
  * })
  */
export interface Badge {
  $name: 'Badge'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Badge.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Badge
    *
    * Replace this default advisory JSDoc with your own documentation about model Badge
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Badge {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Badge } from 'nexus-prisma'
    *
    * objectType({
    *   name: Badge.$name
    *   description: Badge.$description
    *   definition(t) {
    *     t.field(Badge.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Badge', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Badge.name`.
    *
    * ### ️⚠️ You have not writen documentation for model Badge
    *
    * Replace this default advisory JSDoc with your own documentation about model Badge
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Badge {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Badge } from 'nexus-prisma'
    *
    * objectType({
    *   name: Badge.$name
    *   description: Badge.$description
    *   definition(t) {
    *     t.field(Badge.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Badge', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Badge.desc`.
    *
    * ### ️⚠️ You have not writen documentation for model Badge
    *
    * Replace this default advisory JSDoc with your own documentation about model Badge
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Badge {
    *   /// Lorem ipsum dolor sit amet.
    *   desc  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Badge } from 'nexus-prisma'
    *
    * objectType({
    *   name: Badge.$name
    *   description: Badge.$description
    *   definition(t) {
    *     t.field(Badge.desc)
    *   }
    * })
    */
  desc: {
    /**
     * The name of this field.
     */
    name: 'desc'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Badge', 'desc'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Badge.attributions`.
    *
    * ### ️⚠️ You have not writen documentation for model Badge
    *
    * Replace this default advisory JSDoc with your own documentation about model Badge
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Badge {
    *   /// Lorem ipsum dolor sit amet.
    *   attributions  BadgesOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Badge } from 'nexus-prisma'
    *
    * objectType({
    *   name: Badge.$name
    *   description: Badge.$description
    *   definition(t) {
    *     t.field(Badge.attributions)
    *   }
    * })
    */
  attributions: {
    /**
     * The name of this field.
     */
    name: 'attributions'
  
    /**
     * The type of this field.
     */
    type: 'BadgesOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'BadgesOnUsers'> | NexusCore.NexusNonNullDef<'BadgesOnUsers'>)
    : 'Warning/Error: The type \'BadgesOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'BadgesOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Badge', 'attributions'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `CategoriesOnEvents`.
  *
  * ### ️⚠️ You have not writen documentation for model CategoriesOnEvents
  *
  * Replace this default advisory JSDoc with your own documentation about model CategoriesOnEvents
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model CategoriesOnEvents {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { CategoriesOnEvents } from 'nexus-prisma'
  *
  * objectType({
  *   name: CategoriesOnEvents.$name
  *   description: CategoriesOnEvents.$description
  *   definition(t) {
  *     t.field(CategoriesOnEvents.id)
  *   }
  * })
  */
export interface CategoriesOnEvents {
  $name: 'CategoriesOnEvents'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnEvents.event`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   event  Event
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnEvents.$name
    *   description: CategoriesOnEvents.$description
    *   definition(t) {
    *     t.field(CategoriesOnEvents.event)
    *   }
    * })
    */
  event: {
    /**
     * The name of this field.
     */
    name: 'event'
  
    /**
     * The type of this field.
     */
    type: 'Event' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Event'>
    : 'Warning/Error: The type \'Event\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Event\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnEvents', 'event'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnEvents.eventId`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   eventId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnEvents.$name
    *   description: CategoriesOnEvents.$description
    *   definition(t) {
    *     t.field(CategoriesOnEvents.eventId)
    *   }
    * })
    */
  eventId: {
    /**
     * The name of this field.
     */
    name: 'eventId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnEvents', 'eventId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnEvents.category`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   category  Category
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnEvents.$name
    *   description: CategoriesOnEvents.$description
    *   definition(t) {
    *     t.field(CategoriesOnEvents.category)
    *   }
    * })
    */
  category: {
    /**
     * The name of this field.
     */
    name: 'category'
  
    /**
     * The type of this field.
     */
    type: 'Category' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Category'>
    : 'Warning/Error: The type \'Category\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Category\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnEvents', 'category'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnEvents.categoryId`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   categoryId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnEvents.$name
    *   description: CategoriesOnEvents.$description
    *   definition(t) {
    *     t.field(CategoriesOnEvents.categoryId)
    *   }
    * })
    */
  categoryId: {
    /**
     * The name of this field.
     */
    name: 'categoryId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnEvents', 'categoryId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnEvents.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnEvents.$name
    *   description: CategoriesOnEvents.$description
    *   definition(t) {
    *     t.field(CategoriesOnEvents.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnEvents', 'createdAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `CategoriesOnUsers`.
  *
  * ### ️⚠️ You have not writen documentation for model CategoriesOnUsers
  *
  * Replace this default advisory JSDoc with your own documentation about model CategoriesOnUsers
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model CategoriesOnUsers {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { CategoriesOnUsers } from 'nexus-prisma'
  *
  * objectType({
  *   name: CategoriesOnUsers.$name
  *   description: CategoriesOnUsers.$description
  *   definition(t) {
  *     t.field(CategoriesOnUsers.id)
  *   }
  * })
  */
export interface CategoriesOnUsers {
  $name: 'CategoriesOnUsers'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnUsers.user`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnUsers.$name
    *   description: CategoriesOnUsers.$description
    *   definition(t) {
    *     t.field(CategoriesOnUsers.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnUsers', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnUsers.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnUsers.$name
    *   description: CategoriesOnUsers.$description
    *   definition(t) {
    *     t.field(CategoriesOnUsers.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnUsers', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnUsers.category`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   category  Category
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnUsers.$name
    *   description: CategoriesOnUsers.$description
    *   definition(t) {
    *     t.field(CategoriesOnUsers.category)
    *   }
    * })
    */
  category: {
    /**
     * The name of this field.
     */
    name: 'category'
  
    /**
     * The type of this field.
     */
    type: 'Category' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Category'>
    : 'Warning/Error: The type \'Category\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Category\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnUsers', 'category'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnUsers.categoryId`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   categoryId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnUsers.$name
    *   description: CategoriesOnUsers.$description
    *   definition(t) {
    *     t.field(CategoriesOnUsers.categoryId)
    *   }
    * })
    */
  categoryId: {
    /**
     * The name of this field.
     */
    name: 'categoryId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnUsers', 'categoryId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CategoriesOnUsers.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model CategoriesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model CategoriesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CategoriesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CategoriesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: CategoriesOnUsers.$name
    *   description: CategoriesOnUsers.$description
    *   definition(t) {
    *     t.field(CategoriesOnUsers.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CategoriesOnUsers', 'createdAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `UsersInEvents`.
  *
  * ### ️⚠️ You have not writen documentation for model UsersInEvents
  *
  * Replace this default advisory JSDoc with your own documentation about model UsersInEvents
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model UsersInEvents {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { UsersInEvents } from 'nexus-prisma'
  *
  * objectType({
  *   name: UsersInEvents.$name
  *   description: UsersInEvents.$description
  *   definition(t) {
  *     t.field(UsersInEvents.id)
  *   }
  * })
  */
export interface UsersInEvents {
  $name: 'UsersInEvents'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UsersInEvents.user`.
    *
    * ### ️⚠️ You have not writen documentation for model UsersInEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model UsersInEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UsersInEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UsersInEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: UsersInEvents.$name
    *   description: UsersInEvents.$description
    *   definition(t) {
    *     t.field(UsersInEvents.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UsersInEvents', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UsersInEvents.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model UsersInEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model UsersInEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UsersInEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UsersInEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: UsersInEvents.$name
    *   description: UsersInEvents.$description
    *   definition(t) {
    *     t.field(UsersInEvents.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UsersInEvents', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UsersInEvents.event`.
    *
    * ### ️⚠️ You have not writen documentation for model UsersInEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model UsersInEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UsersInEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   event  Event
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UsersInEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: UsersInEvents.$name
    *   description: UsersInEvents.$description
    *   definition(t) {
    *     t.field(UsersInEvents.event)
    *   }
    * })
    */
  event: {
    /**
     * The name of this field.
     */
    name: 'event'
  
    /**
     * The type of this field.
     */
    type: 'Event' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Event'>
    : 'Warning/Error: The type \'Event\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Event\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UsersInEvents', 'event'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UsersInEvents.eventId`.
    *
    * ### ️⚠️ You have not writen documentation for model UsersInEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model UsersInEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UsersInEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   eventId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UsersInEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: UsersInEvents.$name
    *   description: UsersInEvents.$description
    *   definition(t) {
    *     t.field(UsersInEvents.eventId)
    *   }
    * })
    */
  eventId: {
    /**
     * The name of this field.
     */
    name: 'eventId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UsersInEvents', 'eventId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UsersInEvents.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model UsersInEvents
    *
    * Replace this default advisory JSDoc with your own documentation about model UsersInEvents
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UsersInEvents {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UsersInEvents } from 'nexus-prisma'
    *
    * objectType({
    *   name: UsersInEvents.$name
    *   description: UsersInEvents.$description
    *   definition(t) {
    *     t.field(UsersInEvents.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UsersInEvents', 'createdAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `BadgesOnUsers`.
  *
  * ### ️⚠️ You have not writen documentation for model BadgesOnUsers
  *
  * Replace this default advisory JSDoc with your own documentation about model BadgesOnUsers
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model BadgesOnUsers {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { BadgesOnUsers } from 'nexus-prisma'
  *
  * objectType({
  *   name: BadgesOnUsers.$name
  *   description: BadgesOnUsers.$description
  *   definition(t) {
  *     t.field(BadgesOnUsers.id)
  *   }
  * })
  */
export interface BadgesOnUsers {
  $name: 'BadgesOnUsers'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BadgesOnUsers.user`.
    *
    * ### ️⚠️ You have not writen documentation for model BadgesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model BadgesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BadgesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BadgesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: BadgesOnUsers.$name
    *   description: BadgesOnUsers.$description
    *   definition(t) {
    *     t.field(BadgesOnUsers.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BadgesOnUsers', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BadgesOnUsers.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model BadgesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model BadgesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BadgesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BadgesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: BadgesOnUsers.$name
    *   description: BadgesOnUsers.$description
    *   definition(t) {
    *     t.field(BadgesOnUsers.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BadgesOnUsers', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BadgesOnUsers.badge`.
    *
    * ### ️⚠️ You have not writen documentation for model BadgesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model BadgesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BadgesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   badge  Badge
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BadgesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: BadgesOnUsers.$name
    *   description: BadgesOnUsers.$description
    *   definition(t) {
    *     t.field(BadgesOnUsers.badge)
    *   }
    * })
    */
  badge: {
    /**
     * The name of this field.
     */
    name: 'badge'
  
    /**
     * The type of this field.
     */
    type: 'Badge' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Badge'>
    : 'Warning/Error: The type \'Badge\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Badge\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BadgesOnUsers', 'badge'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BadgesOnUsers.badgeId`.
    *
    * ### ️⚠️ You have not writen documentation for model BadgesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model BadgesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BadgesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   badgeId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BadgesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: BadgesOnUsers.$name
    *   description: BadgesOnUsers.$description
    *   definition(t) {
    *     t.field(BadgesOnUsers.badgeId)
    *   }
    * })
    */
  badgeId: {
    /**
     * The name of this field.
     */
    name: 'badgeId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BadgesOnUsers', 'badgeId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `BadgesOnUsers.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model BadgesOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model BadgesOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model BadgesOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { BadgesOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: BadgesOnUsers.$name
    *   description: BadgesOnUsers.$description
    *   definition(t) {
    *     t.field(BadgesOnUsers.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'BadgesOnUsers', 'createdAt'>
  }
}

// Enums

/**
  * Generated Nexus `enumType` configuration based on your Prisma schema's enum `AccountType`.
  *
  * ### ️⚠️ You have not writen documentation for enum AccountType
  *
  * Replace this default advisory JSDoc with your own documentation about enum AccountType
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * enum AccountType {
  *   BASIC
  *   PREMIUM
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * Contains these members: BASIC, PREMIUM
  *
  * @example
  *
  * import { enumType } from 'nexus'
  * import { AccountType } from 'nexus-prisma'
  *
  * enumType(AccountType)
  */
export interface AccountType {
  name: 'AccountType'
  description: undefined
  members: ['BASIC', 'PREMIUM']
}


//
//
// TERMS
// TERMS
// TERMS
// TERMS
//
//

//
//
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
//
//

export const User: User

export const Event: Event

export const Category: Category

export const Badge: Badge

export const CategoriesOnEvents: CategoriesOnEvents

export const CategoriesOnUsers: CategoriesOnUsers

export const UsersInEvents: UsersInEvents

export const BadgesOnUsers: BadgesOnUsers

//
//
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
//
//

export const AccountType: AccountType

//
//
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
//
//

import { Runtime } from 'nexus-prisma/dist-cjs/generator/runtime/settingsSingleton'

/**
 * Adjust Nexus Prisma's [runtime settings](https://pris.ly/nexus-prisma/docs/settings/runtime).
 *
 * @example
 *
 *     import { PrismaClient } from '@prisma/client'
 *     import { ApolloServer } from 'apollo-server'
 *     import { makeSchema } from 'nexus'
 *     import { User, Post, $settings } from 'nexus-prisma'
 *
 *     new ApolloServer({
 *       schema: makeSchema({
 *         types: [],
 *       }),
 *       context() {
 *         return {
 *           db: new PrismaClient(), // <-- You put Prisma client on the "db" context property
 *         }
 *       },
 *     })
 *
 *     $settings({
 *       prismaClientContextField: 'db', // <-- Tell Nexus Prisma
 *     })
 *
 * @remarks This is _different_ than Nexus Prisma's [_gentime_ settings](https://pris.ly/nexus-prisma/docs/settings/gentime).
 */
export const $settings: typeof Runtime.changeSettings