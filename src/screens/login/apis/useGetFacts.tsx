import { Endpoints } from '@/constants/endpoints';
import { httpClient } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';
import { FactsResponse } from '../types';
import { APIErrorResponse } from '@/types';

export const useGetFacts = () => {
  const getFacts = async (): Promise<FactsResponse> => {
    const res = await httpClient(Endpoints.FACTS, {
      method: 'GET',
    });
    return res.data;
  };

  const query = useQuery<FactsResponse, APIErrorResponse>({
    queryKey: [Endpoints.FACTS],
    queryFn: getFacts,
  });

  return query;
};
