import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepoList from "./pages/RepoList/RepoList";
import SingleRepo from "./pages/SingleRepoDetails/SingleRepo";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<RepoList />} />
          <Route exact path="/repo/:repo_name" element={<SingleRepo />} />
        </Routes>
      </Router>
    </div>
  </ApolloProvider>
);

export default App;
