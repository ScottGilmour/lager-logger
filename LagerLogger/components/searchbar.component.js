import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet, TextInput, View } from 'react-native';
import _ from 'lodash';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);

        this.setNewSearchTermDelayed = _.debounce(this.setNewSearchTerm, 700);
    }

    state = {
        searchText: ''
    }

    setNewSearchTerm = () => {
        this.props.setSearchValue(this.state.searchText);
    }
    
    handleChange = (value) => {
        this.setState({searchText: value});
        this.setNewSearchTermDelayed();
    }

    render() {
        return (
            <TextInput
                style={{marginTop: 40, paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this.handleChange}
                value={this.state.searchText}
                placeholder="Search for a brewery"
            />
        );
    }
}


export default Searchbar;
