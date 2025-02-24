import { APIErrorResponse, FetchCallback } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { signIn, SignInResponse } from 'next-auth/react';
import { toast } from 'react-toastify';

export interface LoginPayload {
  email: string;
  password: string;
}

export const usePostLogin = ({
  onSuccess,
  onError,
}: FetchCallback<LoginPayload, SignInResponse | undefined, APIErrorResponse>) => {
  const postLogin = async (data: LoginPayload) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      const err = res?.error && JSON.parse(res.error);
      toast.error(err.message);
      throw new Error(JSON.stringify({ data: err }));
    }
    return res;
  };

  const mutation = useMutation<SignInResponse | undefined, APIErrorResponse, LoginPayload>({
    mutationFn: postLogin,
    onSuccess,
    onError,
  });

  return mutation;
};

// export const useLogin = ({ onSuccess, onError }: FetchCallback<LoginRequest, LoginResponse, LoginError>) => {
//   const postLogin = wrapAPIError(async (data: LoginRequest): Promise<LoginResponse> => {
//     const res = await signIn('credentials', {
//       ...data,
//       redirect: false,
//     });
//     const session = await getSession();
//     if (res?.error) {
//       throw new Error(JSON.stringify({ data: JSON.parse(res.error) }));
//     }
//     return session!.user;
//   });
//   const { isLoading, error, data, mutate } = useMutation<LoginResponse, LoginError, LoginRequest>(postLogin, {
//     onSuccess: (data: LoginResponse, variables: LoginRequest, context: any) => {
//       onSuccess && onSuccess(data, variables, context);
//     },
//     onError,
//   });
//   return { mutate, isLoading, error, data };
// };

// export function wrapAPIError<T extends any[], U>(func: AsyncFunc<T, U>): (...args: T) => Promise<U> {
//   return function (...args: T) {
//     return func(...args).catch((e) => {
//       if (e.response?.data) {
//         throw new HTTPError(e.response.data.error ?? e.response.data.message, e.response?.data);
//       } else {
//         throw e;
//       }
//     });
//   };
// }
