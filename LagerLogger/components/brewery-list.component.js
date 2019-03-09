import React from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, Text, FlatList, View, Span } from 'react-native';

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
  handleBreweryClick = (id) => {
    this.props.selectBrewery(parseInt(id));
  }

  render() {
    return (
      <Query query={SEARCH_BREWERIES} variables={{name: this.props.searchValue}}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :( search value: {this.props.searchValue}</Text>;

          data.breweriesByName.map((brewery) => {
            brewery.key = brewery.id;
            return brewery;
          });

          return (
            <View>
              <FlatList
                style={{height: 100, marginLeft: 20, marginTop: 10}}
                data={data.breweriesByName}
                renderItem={({item}) => <Text onPress={this.handleBreweryClick.bind(this, item.id)}>{item.name}</Text>}
              />
              
            </View>
          );
        }}
      </Query>
    );
  }
}


export default BreweryList;
