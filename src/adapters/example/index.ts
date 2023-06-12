import { AxiosResponse } from 'axios';

import { WEB_API_URL, getRequest } from '../helpers';

type GetCountriesParams = {
  page?: number;
  limit?: number;
};

export const getPokemons = async ({
  page = 1,
  limit = 10,
}: GetCountriesParams = {}): Promise<AxiosResponse> => {
  return await getRequest(`${WEB_API_URL}/pokemon`, {
    params: { offset: (page - 1) * limit, limit },
  });
};
