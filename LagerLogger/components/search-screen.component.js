import React from "react";
import {Query}  from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, TextInput, View } from 'react-native';
import Brewery from './brewery.component';
import BreweryList from './brewery-list.component';
import Searchbar from './searchbar.component';
import Navbar from './navbar.component';
import { Container, Header, Content, Button, Icon, Text, Left, Right, Body, Title, Segment, Fab } from 'native-base';

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        search: 'dog',
        selected: null,
        currentSegment: 1,
        favorites: []
    }

    handleSearchChange = (newValue) => {
        this.setState({
            search: newValue,
            selected: null
        })
    }

    handleFavorite = (brewery) => {
        console.log(`Adding to favorites: ${brewery}`);
    }

    handleBrewerySelect = (newBreweryID) => {
        console.log(newBreweryID);
        if (newBreweryID && newBreweryID > 0) {
            this.setState({ selected: newBreweryID });
        }
    }

    handleSetNewSegment = (newSegment) => {
        this.setState({currentSegment: newSegment});
    }

    render() {
        return (
            <Container>
                <Navbar setSearchValue={this.handleSearchChange} />
                <Segment>
                    <Button first active={this.state.currentSegment == 1} onPress={this.handleSetNewSegment.bind(this, 1)}>
                        <Text>Breweries</Text>
                    </Button>
                    <Button active={this.state.currentSegment == 2} onPress={this.handleSetNewSegment.bind(this, 2)}>
                        <Text>Visited</Text>
                    </Button>
                    <Button last active={this.state.currentSegment == 3} onPress={this.handleSetNewSegment.bind(this, 3)}>
                        <Text>Favorites</Text>
                    </Button>
                </Segment>

                <View style={{ flex: 1 }}>
                    { !this.state.selected ? <BreweryList searchValue={this.state.search} selectBrewery={this.handleBrewerySelect} /> : null }
                    { this.state.selected ? <Brewery addFavorite={this.handleFavorite} id={this.state.selected} /> : null }

                    <Fab
                        active={true}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                    >
                        <Icon name="beer" />
                    </Fab>
                </View>
            </Container>
        );
    }
}


export default SearchScreen;
