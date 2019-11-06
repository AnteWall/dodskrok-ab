import { GraphQLResolveInfo } from 'graphql';
import { LobbyModel } from '../dataSources/MongoApi/models/LobbyModel';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};










export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type AuthToken = {
   __typename?: 'AuthToken',
  jwt: Scalars['String'],
};

export type CreateLobbyInput = {
  name: Scalars['String'],
};

export type DebugToken = {
   __typename?: 'DebugToken',
  deviceId: Scalars['String'],
  id: Scalars['String'],
};

export type JoinLobbyInput = {
  lobbyId: Scalars['ID'],
  username: Scalars['String'],
};

export type Lobby = {
   __typename?: 'Lobby',
  players: Array<Maybe<Player>>,
  name: Scalars['String'],
  id: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  authenticate: AuthToken,
  debugToken: DebugToken,
  createLobby: Lobby,
  joinLobby: Lobby,
};


export type MutationAuthenticateArgs = {
  deviceId: Scalars['String']
};


export type MutationCreateLobbyArgs = {
  input: CreateLobbyInput
};


export type MutationJoinLobbyArgs = {
  input: JoinLobbyInput
};

export type Player = {
   __typename?: 'Player',
  user: User,
  score: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  lobby: Lobby,
  lobbies: Array<Maybe<Lobby>>,
};


export type QueryLobbyArgs = {
  id: Scalars['ID']
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  name: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Lobby: ResolverTypeWrapper<LobbyModel>,
  Player: ResolverTypeWrapper<Player>,
  User: ResolverTypeWrapper<User>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Mutation: ResolverTypeWrapper<{}>,
  AuthToken: ResolverTypeWrapper<AuthToken>,
  DebugToken: ResolverTypeWrapper<DebugToken>,
  CreateLobbyInput: CreateLobbyInput,
  JoinLobbyInput: JoinLobbyInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  AdditionalEntityFields: AdditionalEntityFields,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  ID: Scalars['ID'],
  Lobby: LobbyModel,
  Player: Player,
  User: User,
  Int: Scalars['Int'],
  Mutation: {},
  AuthToken: AuthToken,
  DebugToken: DebugToken,
  CreateLobbyInput: CreateLobbyInput,
  JoinLobbyInput: JoinLobbyInput,
  Boolean: Scalars['Boolean'],
  AdditionalEntityFields: AdditionalEntityFields,
};

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = {   discriminatorField?: Maybe<Maybe<Scalars['String']>>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = {   discriminatorField?: Maybe<Scalars['String']>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = {   embedded?: Maybe<Maybe<Scalars['Boolean']>>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = {   overrideType?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = {   overrideType?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = {   path?: Maybe<Scalars['String']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthToken'] = ResolversParentTypes['AuthToken']> = {
  jwt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type DebugTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['DebugToken'] = ResolversParentTypes['DebugToken']> = {
  deviceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LobbyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lobby'] = ResolversParentTypes['Lobby']> = {
  players?: Resolver<Array<Maybe<ResolversTypes['Player']>>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  authenticate?: Resolver<ResolversTypes['AuthToken'], ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'deviceId'>>,
  debugToken?: Resolver<ResolversTypes['DebugToken'], ParentType, ContextType>,
  createLobby?: Resolver<ResolversTypes['Lobby'], ParentType, ContextType, RequireFields<MutationCreateLobbyArgs, 'input'>>,
  joinLobby?: Resolver<ResolversTypes['Lobby'], ParentType, ContextType, RequireFields<MutationJoinLobbyArgs, 'input'>>,
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lobby?: Resolver<ResolversTypes['Lobby'], ParentType, ContextType, RequireFields<QueryLobbyArgs, 'id'>>,
  lobbies?: Resolver<Array<Maybe<ResolversTypes['Lobby']>>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AuthToken?: AuthTokenResolvers<ContextType>,
  DebugToken?: DebugTokenResolvers<ContextType>,
  Lobby?: LobbyResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Player?: PlayerResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>,
  union?: UnionDirectiveResolver<any, any, ContextType>,
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>,
  entity?: EntityDirectiveResolver<any, any, ContextType>,
  column?: ColumnDirectiveResolver<any, any, ContextType>,
  id?: IdDirectiveResolver<any, any, ContextType>,
  link?: LinkDirectiveResolver<any, any, ContextType>,
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>,
  map?: MapDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
import { ObjectID } from 'mongodb';