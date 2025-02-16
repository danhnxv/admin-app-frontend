import { AxiosError } from 'axios';

export type APIErrorResponse = AxiosError<APIErrorResponse>;

export type FetchCallback<TRequest, TResponse, TError> = {
  onSuccess?: (data: TResponse, variables: TRequest, context: unknown) => void | Promise<unknown>;
  onError?: (error: TError, variables: TRequest, context: unknown) => void | Promise<unknown>;
};
