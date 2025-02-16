import { Endpoints } from '@/constants';
import { httpClient } from '@/lib/http-client';
import { APIErrorResponse, FetchCallback } from '@/types';
import { useMutation } from '@tanstack/react-query';

export interface PostFactPayload {
  fact: string;
}

export interface PostFactResponse {
  message: string;
}

export const usePostFact = ({
  onSuccess,
  onError,
}: FetchCallback<PostFactPayload, PostFactResponse, APIErrorResponse>) => {
  const postFact = async ({ fact }: PostFactPayload) => {
    const res = await httpClient(`${Endpoints.FACTS}`, {
      method: 'POST',
      data: {
        fact,
      },
    });
    return res?.data;
  };

  const mutation = useMutation<PostFactResponse, APIErrorResponse, PostFactPayload>({
    mutationFn: postFact,
    onSuccess,
    onError,
  });

  return mutation;
};
