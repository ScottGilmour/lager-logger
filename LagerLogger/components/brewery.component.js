import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, Text, View } from 'react-native';

const QUERY_BREWERY = gql`
  query {
    brewery(id: 6245) {
      name
      type
      street
      city
      state
      country
      tags
    }
  }
`;

class Brewery extends React.Component {

  render() {
    return (
      <Query query={QUERY_BREWERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text>{data.brewery.name}</Text>
              <Text>{data.brewery.street}</Text>
              <Text>{data.brewery.city}</Text>
            </View>
          );
        }}
      </Query>
    );
  }
}


export default Brewery;
