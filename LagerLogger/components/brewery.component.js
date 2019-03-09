import React from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, View, Image } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text, Button, Icon, Right } from 'native-base';
import GoogleStaticMap from 'react-native-google-static-map';

const QUERY_BREWERY = gql`
  query brewery($id: ID!) {
    brewery(id: $id) {
      id
      name
      type
      street
      city
      state
      country
      tags
      latitude
      longitude
      url
      phone
    }
  }
`;


class Brewery extends React.Component {

  constructor(props) {
    super(props);
  }

  handleAddFavorite = (id) => {
    this.props.addFavorite(id);
  }

  render() {
    return (
      <Query query={QUERY_BREWERY} variables={{ id: this.props.id }}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          return (
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{data.brewery.name}</Text>
                    <Text note>{data.brewery.street + ' ' + data.brewery.city}</Text>
                    <Text note>{data.brewery.url}</Text>
                  </Body>
                </Left>
                <Right>
                <Icon active name="call" />
                </Right>
              </CardItem>
              <CardItem cardBody>
                <GoogleStaticMap
                  style={{width: '100%'}}
                  latitude={data.brewery.latitude}
                  longitude={data.brewery.longitude}
                  zoom={13}
                  size={{ width: 450, height: 300 }}
                  apiKey={'AIzaSyA1aCfVmHt6vOFsw2x13zLu79j0KC_bZOY'}
              />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="beer" />
                    <Text>12 Beers</Text>
                  </Button>
                </Left>
                <Body>
                  
                </Body>
                <Right>
                  <Button transparent onPress={this.handleAddFavorite.bind(this, data.brewery.id)}>
                    <Icon active name="heart" />
                  </Button>
                </Right>
              </CardItem>
            </Card>

          );
        }}
      </Query>
    );
  }
}


export default Brewery;
