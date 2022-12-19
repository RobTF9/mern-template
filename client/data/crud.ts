import {
  useQuery,
  UseMutateFunction,
  useMutation,
  QueryKey,
} from '@tanstack/react-query'
import { del, get, patch, post, put } from './fetch'
import { queryClient } from '../context/query'
import { useMessageContext } from '../context/message'

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
  const { data, isLoading, refetch } = useQuery(cache, () =>
    get<{ data: T }>(endpoint)
  )
  return [data, isLoading, refetch]
}

export function createOne<T, U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: ServerResponse<U>) => void
): [
  mutate: UseMutateFunction<ServerResponse<U>, unknown, T, unknown>,
  isLoading: boolean
] {
  const { showMessage } = useMessageContext()
  const { mutate, isLoading } = useMutation(
    (u: T) => post<T, ServerResponse<U>>(endpoint, u),
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

export function updateOne<T extends Resource, U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: ServerResponse<U>) => void
): [
  mutate: UseMutateFunction<ServerResponse<U>, unknown, T, unknown>,
  isLoading: boolean
] {
  const { showMessage } = useMessageContext()
  const { mutate, isLoading } = useMutation(
    (u: T) =>
      put<T, ServerResponse<U>>(`${endpoint}/${u._id}`, {
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
  callback?: (res: ServerResponse<U>) => void
): [
  mutate: UseMutateFunction<ServerResponse<U>, unknown, T, unknown>,
  isLoading: boolean
] {
  const { showMessage } = useMessageContext()

  const { mutate, isLoading } = useMutation(
    (u: T) =>
      patch<T, ServerResponse<U>>(endpoint, {
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
  callback?: (res: ServerResponse<U>) => void
): [
  mutate: UseMutateFunction<ServerResponse<U>, unknown, string, unknown>,
  isLoading: boolean
] {
  const { showMessage } = useMessageContext()

  const { mutate, isLoading } = useMutation(
    (id: string) => del<ServerResponse<U>>(`${endpoint}/${id}`),
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
