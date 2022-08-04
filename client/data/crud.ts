import { useQuery, UseMutateFunction, useMutation, QueryKey } from '@tanstack/react-query'
import { del, get, patch, post, put } from './fetch'
import { queryClient } from '../context/query'
import { useMessageContext } from '../context/message'

export interface APIReciever<T> {
  (id?: string): [
    data: { data: T; searched?: boolean } | undefined,
    isLoading: boolean,
    refetch: () => void
  ]
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

export function getOne<T>(
  cache: QueryKey,
  endpoint: string
): [data: { data: T } | undefined, isLoading: boolean, refetch: () => void] {
  const { data, isLoading, refetch } = useQuery(cache, () => get<{ data: T }>(endpoint))
  return [data, isLoading, refetch]
}

export interface APIGiver<T, U> {
  (id?: string, callback?: (res: ServerReponse<U>) => void): [
    mutate: UseMutateFunction<ServerReponse<U>, unknown, T, unknown>,
    isLoading: boolean
  ]
}

export function createOne<T, U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: ServerReponse<U>) => void
): [mutate: UseMutateFunction<ServerReponse<U>, unknown, T, unknown>, isLoading: boolean] {
  const { showMessage } = useMessageContext()
  const { mutate, isLoading, reset } = useMutation(
    (u: T) => post<T, ServerReponse<U>>(endpoint, u),
    {
      onSuccess: (res) => {
        reset()
        queryClient.invalidateQueries(cache)
        if (res) {
          if (res.message) {
            showMessage(res.message)
          }
          if (callback) {
            callback(res)
          }
        }
      },
    }
  )
  return [mutate, isLoading]
}

export function updateOne<T, U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: ServerReponse<U>) => void
): [mutate: UseMutateFunction<ServerReponse<U>, unknown, T, unknown>, isLoading: boolean] {
  const { showMessage } = useMessageContext()
  const { mutate, isLoading } = useMutation(
    (u: T) =>
      put<T, ServerReponse<U>>(endpoint, {
        ...u,
        updatedAt: undefined,
      }),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(cache)
        if (res) {
          if (res.message) {
            showMessage(res.message)
          }
          if (callback) {
            callback(res)
          }
        }
      },
    }
  )
  return [mutate, isLoading]
}

export function patchOne<T, U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: ServerReponse<U>) => void
): [mutate: UseMutateFunction<ServerReponse<U>, unknown, T, unknown>, isLoading: boolean] {
  const { showMessage } = useMessageContext()
  const { mutate, isLoading } = useMutation(
    (u: T) =>
      patch<T, ServerReponse<U>>(endpoint, {
        ...u,
        updatedAt: undefined,
      }),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(cache)
        if (res) {
          if (res.message) {
            showMessage(res.message)
          }
          if (callback) {
            callback(res)
          }
        }
      },
    }
  )
  return [mutate, isLoading]
}

export function deleteOne<U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: ServerReponse<U>) => void
): [mutate: UseMutateFunction<ServerReponse<U>, unknown, string, unknown>, isLoading: boolean] {
  const { showMessage } = useMessageContext()
  const { mutate, isLoading, reset } = useMutation(
    (id: string) => del<ServerReponse<U>>(`${endpoint}/${id}`),
    {
      onSuccess: (res) => {
        reset()
        queryClient.invalidateQueries(cache)
        if (res) {
          if (res.message) {
            showMessage(res.message)
          }
          if (callback) {
            callback(res)
          }
        }
      },
    }
  )
  return [mutate, isLoading]
}
