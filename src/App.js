import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Github Repos</h1>
    </div>
  </ApolloProvider>
);

export default App;
