import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './index.scss';
import App from './App';
import { POKEMON_GRAPHQL_ENDPOINT } from './config';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: POKEMON_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
