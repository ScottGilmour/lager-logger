import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, TextInput, View } from 'react-native';
import BreweryList from './brewery-list.component';
import Searchbar from './searchbar.component';

class SearchScreen extends React.Component {
    state = {
        search: 'dog'
    }

    handleSearchChange = (newValue) => {
        this.setState({
            search: newValue
        })
    }

    render() {
        return (
            <View>
                <Searchbar
                    setSearchValue={this.handleSearchChange}
                    search={this.state.search}
                ></Searchbar>
                <BreweryList searchValue={this.state.search}></BreweryList>
            </View>
        );
    }
}


export default SearchScreen;
