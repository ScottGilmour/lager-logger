import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './components/search-screen.component';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SearchScreen></SearchScreen>
      </ApolloProvider>
    );
  }
}

