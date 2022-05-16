import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL = 'https://graphql.anilist.co/';

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

export default client;
