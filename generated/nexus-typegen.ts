/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../src/context"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName> & { totalCount: connectionPluginCore.ConnectionFieldResolver<TypeName, FieldName, "totalCount"> }
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  EventInput: { // input type
    categories: string[]; // [String!]!
    desc: string; // String!
    end: string; // String!
    lat: number; // Float!
    lng: number; // Float!
    name: string; // String!
    start: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Badge: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    desc: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  BadgeConnection: { // root type
    edges?: Array<NexusGenRootTypes['BadgeEdge'] | null> | null; // [BadgeEdge]
    nodes?: Array<NexusGenRootTypes['Badge'] | null> | null; // [Badge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount?: number | null; // Int
  }
  BadgeEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Badge'] | null; // Badge
  }
  Category: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    desc: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  CategoryConnection: { // root type
    edges?: Array<NexusGenRootTypes['CategoryEdge'] | null> | null; // [CategoryEdge]
    nodes?: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount?: number | null; // Int
  }
  CategoryEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Category'] | null; // Category
  }
  Event: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    desc?: string | null; // String
    end: NexusGenScalars['DateTime']; // DateTime!
    hostId: string; // String!
    id: string; // ID!
    lat: number; // Float!
    lng: number; // Float!
    name: string; // String!
    start: NexusGenScalars['DateTime']; // DateTime!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  EventConnection: { // root type
    edges?: Array<NexusGenRootTypes['EventEdge'] | null> | null; // [EventEdge]
    nodes?: Array<NexusGenRootTypes['Event'] | null> | null; // [Event]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount?: number | null; // Int
  }
  EventEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Event'] | null; // Event
  }
  HelloWorld: { // root type
    test?: string | null; // String
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
    verified: boolean; // Boolean!
  }
  UserConnection: { // root type
    edges?: Array<NexusGenRootTypes['UserEdge'] | null> | null; // [UserEdge]
    nodes?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount?: number | null; // Int
  }
  UserEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['User'] | null; // User
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Badge: { // field return type
    attributedUsers: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    desc: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  BadgeConnection: { // field return type
    edges: Array<NexusGenRootTypes['BadgeEdge'] | null> | null; // [BadgeEdge]
    nodes: Array<NexusGenRootTypes['Badge'] | null> | null; // [Badge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number | null; // Int
  }
  BadgeEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Badge'] | null; // Badge
  }
  Category: { // field return type
    attributedEvents: NexusGenRootTypes['EventConnection'] | null; // EventConnection
    attributedUsers: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    desc: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  CategoryConnection: { // field return type
    edges: Array<NexusGenRootTypes['CategoryEdge'] | null> | null; // [CategoryEdge]
    nodes: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number | null; // Int
  }
  CategoryEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Category'] | null; // Category
  }
  Event: { // field return type
    attendees: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    categories: NexusGenRootTypes['CategoryConnection'] | null; // CategoryConnection
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    desc: string | null; // String
    end: NexusGenScalars['DateTime']; // DateTime!
    host: NexusGenRootTypes['User']; // User!
    hostId: string; // String!
    id: string; // ID!
    lat: number; // Float!
    likers: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    lng: number; // Float!
    name: string; // String!
    start: NexusGenScalars['DateTime']; // DateTime!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  EventConnection: { // field return type
    edges: Array<NexusGenRootTypes['EventEdge'] | null> | null; // [EventEdge]
    nodes: Array<NexusGenRootTypes['Event'] | null> | null; // [Event]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number | null; // Int
  }
  EventEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Event'] | null; // Event
  }
  HelloWorld: { // field return type
    test: string | null; // String
  }
  Mutation: { // field return type
    blockUser: boolean | null; // Boolean
    createEvent: boolean | null; // Boolean
    deleteEvent: boolean | null; // Boolean
    deleteUser: boolean | null; // Boolean
    followUser: boolean | null; // Boolean
    joinEvent: boolean | null; // Boolean
    leaveEvent: boolean | null; // Boolean
    likeEvent: boolean | null; // Boolean
    unblockUser: boolean | null; // Boolean
    unfollowUser: boolean | null; // Boolean
    unlikeEvent: boolean | null; // Boolean
    updateEvent: boolean | null; // Boolean
    updateUser: boolean | null; // Boolean
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    badge: NexusGenRootTypes['Badge'] | null; // Badge
    badges: Array<NexusGenRootTypes['Badge'] | null> | null; // [Badge]
    categories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    category: NexusGenRootTypes['Category'] | null; // Category
    event: NexusGenRootTypes['Event'] | null; // Event
    events: Array<NexusGenRootTypes['Event'] | null> | null; // [Event]
    helloWorld: NexusGenRootTypes['HelloWorld'] | null; // HelloWorld
    user: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  User: { // field return type
    attending: NexusGenRootTypes['EventConnection'] | null; // EventConnection
    attributedCategories: NexusGenRootTypes['CategoryConnection'] | null; // CategoryConnection
    badges: NexusGenRootTypes['BadgeConnection'] | null; // BadgeConnection
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    followers: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    following: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    hosting: NexusGenRootTypes['EventConnection'] | null; // EventConnection
    id: string; // ID!
    likes: NexusGenRootTypes['EventConnection'] | null; // EventConnection
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
    verified: boolean; // Boolean!
  }
  UserConnection: { // field return type
    edges: Array<NexusGenRootTypes['UserEdge'] | null> | null; // [UserEdge]
    nodes: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number | null; // Int
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User'] | null; // User
  }
}

export interface NexusGenFieldTypeNames {
  Badge: { // field return type name
    attributedUsers: 'UserConnection'
    createdAt: 'DateTime'
    desc: 'String'
    id: 'ID'
    name: 'String'
    updatedAt: 'DateTime'
  }
  BadgeConnection: { // field return type name
    edges: 'BadgeEdge'
    nodes: 'Badge'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  BadgeEdge: { // field return type name
    cursor: 'String'
    node: 'Badge'
  }
  Category: { // field return type name
    attributedEvents: 'EventConnection'
    attributedUsers: 'UserConnection'
    createdAt: 'DateTime'
    desc: 'String'
    id: 'ID'
    name: 'String'
    updatedAt: 'DateTime'
  }
  CategoryConnection: { // field return type name
    edges: 'CategoryEdge'
    nodes: 'Category'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  CategoryEdge: { // field return type name
    cursor: 'String'
    node: 'Category'
  }
  Event: { // field return type name
    attendees: 'UserConnection'
    categories: 'CategoryConnection'
    createdAt: 'DateTime'
    desc: 'String'
    end: 'DateTime'
    host: 'User'
    hostId: 'String'
    id: 'ID'
    lat: 'Float'
    likers: 'UserConnection'
    lng: 'Float'
    name: 'String'
    start: 'DateTime'
    updatedAt: 'DateTime'
  }
  EventConnection: { // field return type name
    edges: 'EventEdge'
    nodes: 'Event'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  EventEdge: { // field return type name
    cursor: 'String'
    node: 'Event'
  }
  HelloWorld: { // field return type name
    test: 'String'
  }
  Mutation: { // field return type name
    blockUser: 'Boolean'
    createEvent: 'Boolean'
    deleteEvent: 'Boolean'
    deleteUser: 'Boolean'
    followUser: 'Boolean'
    joinEvent: 'Boolean'
    leaveEvent: 'Boolean'
    likeEvent: 'Boolean'
    unblockUser: 'Boolean'
    unfollowUser: 'Boolean'
    unlikeEvent: 'Boolean'
    updateEvent: 'Boolean'
    updateUser: 'Boolean'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Query: { // field return type name
    badge: 'Badge'
    badges: 'Badge'
    categories: 'Category'
    category: 'Category'
    event: 'Event'
    events: 'Event'
    helloWorld: 'HelloWorld'
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    attending: 'EventConnection'
    attributedCategories: 'CategoryConnection'
    badges: 'BadgeConnection'
    createdAt: 'DateTime'
    followers: 'UserConnection'
    following: 'UserConnection'
    hosting: 'EventConnection'
    id: 'ID'
    likes: 'EventConnection'
    updatedAt: 'DateTime'
    username: 'String'
    verified: 'Boolean'
  }
  UserConnection: { // field return type name
    edges: 'UserEdge'
    nodes: 'User'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  UserEdge: { // field return type name
    cursor: 'String'
    node: 'User'
  }
}

export interface NexusGenArgTypes {
  Badge: {
    attributedUsers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Category: {
    attributedEvents: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    attributedUsers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Event: {
    attendees: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    categories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    likers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    blockUser: { // args
      userId: string; // String!
    }
    createEvent: { // args
      data: NexusGenInputs['EventInput']; // EventInput!
    }
    deleteEvent: { // args
      eventId: string; // String!
    }
    followUser: { // args
      celebId: string; // String!
    }
    joinEvent: { // args
      eventId: string; // String!
    }
    leaveEvent: { // args
      eventId: string; // String!
    }
    likeEvent: { // args
      eventId: string; // String!
    }
    unblockUser: { // args
      userId: string; // String!
    }
    unfollowUser: { // args
      celebId: string; // String!
    }
    unlikeEvent: { // args
      eventId: string; // String!
    }
    updateEvent: { // args
      data: NexusGenInputs['EventInput']; // EventInput!
      eventId: string; // String!
    }
    updateUser: { // args
      categories: string[]; // [String!]!
      username: string; // String!
    }
  }
  Query: {
    badge: { // args
      id: string; // String!
    }
    badges: { // args
      search?: string | null; // String
    }
    categories: { // args
      search?: string | null; // String
    }
    category: { // args
      id: string; // String!
    }
    event: { // args
      id: string; // String!
    }
    user: { // args
      id: string; // String!
    }
  }
  User: {
    attending: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    attributedCategories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    badges: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    followers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    following: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    hosting: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    likes: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}