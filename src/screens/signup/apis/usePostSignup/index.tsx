import { Endpoints } from '@/constants/endpoints';
import { httpClient } from '@/lib/http-client';
import { APIErrorResponse, FetchCallback } from '@/types';
import { useMutation } from '@tanstack/react-query';

export interface SignupPayload {
  email: string;
  password: string;
  username: string;
}
interface SignupResponse {
  message: string;
}
export const usePostSignup = ({
  onSuccess,
  onError,
}: FetchCallback<SignupPayload, SignupResponse, APIErrorResponse>) => {
  const postSignup = async (data: SignupPayload) => {
    const res = await httpClient(`${Endpoints.SIGNUP}`, {
      method: 'POST',
      data,
    });
    return res?.data;
  };

  const mutation = useMutation<SignupResponse, APIErrorResponse, SignupPayload>({
    mutationFn: postSignup,
    onSuccess,
    onError,
  });

  return mutation;
};
