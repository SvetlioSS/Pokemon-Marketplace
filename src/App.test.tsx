import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import { POKEMON_GRAPHQL_ENDPOINT } from './config';

const client = new ApolloClient({
  uri: POKEMON_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

test('loads pokemons', async () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

  const loadingElement = screen.getByText(/Loading.../i);

  expect(loadingElement).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText('Ivysaur')).toBeInTheDocument();
  });
});
