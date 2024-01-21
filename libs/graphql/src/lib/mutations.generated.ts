import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type LoginUserMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type LoginUserMutation = { __typename?: 'RootMutation', login?: { __typename?: 'LoginPayload', authToken?: string | null, refreshToken?: string | null, user?: { __typename?: 'User', id: string, name?: string | null } | null } | null };


export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clientMutationId"},"value":{"kind":"StringValue","value":"uniqueId","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"StringValue","value":"alanshipman","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"StringValue","value":"$4Monkeybread","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;