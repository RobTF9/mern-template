import { useQuery, UseMutateFunction, useMutation, QueryKey } from '@tanstack/react-query'
import { get, post } from './fetch'
import { queryClient } from '../context/query'

export interface APIReciever<T> {
  (id?: string): [data: ServerReponse<T> | undefined, isLoading: boolean, refetch: () => void]
}

export function getMany<T>(
  cache: QueryKey,
  endpoint: string,
  query?: string
): [
  data: { data: Array<T>; searched?: true } | undefined,
  isLoading: boolean,
  refetch: () => void
] {
  const { data, isLoading, refetch } = useQuery(cache, () =>
    get<{ data: Array<T> }>(query ? endpoint + query : endpoint)
  )
  return [data, isLoading, refetch]
}

export interface APIGiver<T, U> {
  (id?: string, callback?: (res: ServerReponse<U>) => void): [
    mutate: UseMutateFunction<U, unknown, T, unknown>,
    isLoading: boolean
  ]
}

export function createOne<T, U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: ServerReponse<U>) => void
): [mutate: UseMutateFunction<ServerReponse<U>, unknown, T, unknown>, isLoading: boolean] {
  const { mutate, isLoading } = useMutation((u: T) => post<T, ServerReponse<U>>(endpoint, u), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(cache)
      if (res) {
        if (callback) {
          callback(res)
        }
      }
    },
  })
  return [mutate, isLoading]
}
