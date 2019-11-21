import React, { Component } from 'react';
import { Container, Content, Button, Text, View } from 'native-base';
import Header from './../../component/header/header'
export default class ButtonBlockExample extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} />
            </View>
        );
    }
}