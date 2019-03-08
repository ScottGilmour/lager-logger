import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, Text, View, Span } from 'react-native';

const SEARCH_BREWERIES = gql`
    query breweriesByName($name: String!) {
        breweriesByName(name: $name) {
            id
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

class BreweryList extends React.Component {
  render() {
    return (
      <Query query={SEARCH_BREWERIES} variables={{name: this.props.searchValue}}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :( search value: {this.props.searchValue}</Text>;

          return (
            <View>
              <Text>Search props: {this.props.searchValue}</Text>
              <View>{data.breweriesByName.map((b) => <Text key={b.id}>{b.name}</Text>)}</View>
            </View>
          );
        }}
      </Query>
    );
  }
}


export default BreweryList;
