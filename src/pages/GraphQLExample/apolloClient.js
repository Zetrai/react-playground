import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://countries.trevorblades.com/' }), // Ensures only HTTP is used
  cache: new InMemoryCache(),
});

export default client;
