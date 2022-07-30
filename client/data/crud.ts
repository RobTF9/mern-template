import {
  useQuery,
  UseMutateFunction,
  useMutation,
  QueryKey,
} from "@tanstack/react-query";
import { get, post } from "./fetch";
import { queryClient } from "../context/Query";

export interface APIReciever<T> {
  (id?: string): [
    data: { data: T; searched?: boolean } | undefined,
    isLoading: boolean,
    refetch: () => void
  ];
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
  );
  return [data, isLoading, refetch];
}

export interface APIGiver<T, U> {
  (id?: string, callback?: (res: { data: U }) => void): [
    mutate: UseMutateFunction<U, unknown, T, unknown>,
    isLoading: boolean
  ];
}

export function createOne<T, U>(
  cache: QueryKey,
  endpoint: string,
  callback?: (res: { data: U }) => void
): [
  mutate: UseMutateFunction<{ data: U }, unknown, T, unknown>,
  isLoading: boolean
] {
  const { mutate, isLoading } = useMutation(
    (u: T) => post<T, { data: U }>(endpoint, u),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(cache);
        if (res) {
          if (callback) {
            callback(res);
          }
        }
      },
    }
  );
  return [mutate, isLoading];
}
