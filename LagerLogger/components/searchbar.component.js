import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, TextInput, View } from 'react-native';

class Searchbar extends React.Component {
    handleChange = (value) => {
        this.props.setSearchValue(value);
    }

    render() {
        return (
            <TextInput
                style={{marginTop: 40, paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this.handleChange}
                value={this.props.search}
                placeholder="Search for a brewery"
            />
        );
    }
}


export default Searchbar;
