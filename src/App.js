import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { Artworks } from "./Containers";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      console.log(`Graphql error ${message}`);
    });
  }
  if (networkError) {
    console.log(`Network error ${networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/jsmellz/screensaverv1",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Artworks />
    </ApolloProvider>
  );
}

export default App;
