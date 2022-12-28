import * as Types from '../../app/graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAnimePageQueryVariables = Types.Exact<{
  page: Types.Scalars['Int'];
  perPage: Types.Scalars['Int'];
}>;


export type GetAnimePageQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, description?: string | null, averageScore?: number | null, title?: { __typename?: 'MediaTitle', english?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null } | null } | null> | null } | null };


export const GetAnimePageDocument = gql`
    query GetAnimePage($page: Int!, $perPage: Int!) {
  Page(page: $page, perPage: $perPage) {
    media {
      id
      description
      averageScore
      title {
        english
      }
      coverImage {
        extraLarge
      }
    }
  }
}
    `;

/**
 * __useGetAnimePageQuery__
 *
 * To run a query within a React component, call `useGetAnimePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimePageQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetAnimePageQuery(baseOptions: Apollo.QueryHookOptions<GetAnimePageQuery, GetAnimePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimePageQuery, GetAnimePageQueryVariables>(GetAnimePageDocument, options);
      }
export function useGetAnimePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimePageQuery, GetAnimePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimePageQuery, GetAnimePageQueryVariables>(GetAnimePageDocument, options);
        }
export type GetAnimePageQueryHookResult = ReturnType<typeof useGetAnimePageQuery>;
export type GetAnimePageLazyQueryHookResult = ReturnType<typeof useGetAnimePageLazyQuery>;
export type GetAnimePageQueryResult = Apollo.QueryResult<GetAnimePageQuery, GetAnimePageQueryVariables>;