import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { getPokemons } from '../adapters/example';

const Home = (): React.ReactElement => {
  const { status, error, data } = useQuery({
    queryKey: ['pokemons', { page: 1 }],
    keepPreviousData: true,
    queryFn: () => getPokemons({ page: 1, limit: 20 }),
  });

  // eslint-disable-next-line no-console
  console.log({ status, error, data });

  return (
    <div>
      <h1>Cool</h1>
    </div>
  );
};
export default Home;
