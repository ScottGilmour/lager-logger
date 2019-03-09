import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Header, Left, Button, Right, Title, Icon, Body, Item, Input, Text } from 'native-base';
import _ from 'lodash';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.setNewSearchTermDelayed = _.debounce(this.setNewSearchTerm, 700);
    }

    state = {
        activeSearch: false,
        searchText: ''
    }

    setNewSearchTerm = () => {
        this.props.setSearchValue(this.state.searchText);
    }

    handleChange = (value) => {
        console.log(value.nativeEvent.text);
        this.setState({ searchText: value.nativeEvent.text });
        this.setNewSearchTermDelayed();
    }

    handleSearchBtn = () => {
        this.setState({activeSearch: !this.state.activeSearch});
    }

    handleCancelSearch = () => {
        this.setState({activeSearch: false, searchText: ''});
    }

    render() {
        if (this.state.activeSearch) {
            return (
                <Header hasSegment searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input 
                            placeholder="Search"
                            onChange={this.handleChange}
                        />
                        <Icon name="ios-beer" />
                    </Item>
                    <Button transparent onPress={this.handleSearchBtn}>
                        <Text>Cancel</Text>
                    </Button>
                </Header>
            );
        }

        return (
            <Header hasSegment>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Lager Logger</Title>
                </Body>
                <Right>
                    <Button transparent onPress={this.handleSearchBtn}>
                        <Icon name='search' />
                    </Button>
                </Right>
            </Header>
        );

        /*
<TextInput
                style={{marginTop: 40, paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this.handleChange}
                value={this.state.searchText}
                placeholder="Search for a brewery"
            />
        */
    }
}


export default Navbar;
