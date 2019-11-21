import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'native-base';

import Input from '../../component/input/Input';
export default class FloatingLabelExample extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style ={{flex: 1}}>
        <Image
          style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 50 }}
          source={require('./../../component/Logo/Blood-bank.png')}
        />
        <Input style={{ justifyContent: 'center', alignItems: 'center', flex: 1, alignSelf: 'center' }} />

        <Button
          onPress={() => {
            alert("")
            this.props.navigation.navigate("Home")
          }}
          style={{ marginTop: 50, backgroundColor: '#be1d2d', width: 300, marginLeft: 10 }}>
          <Text style={{ textAlign: 'center', color: '#fff' }}>Login</Text>
        </Button>
        <Text onPress={() => this.props.navigation.navigate("Signup")}>Don't have an account?</Text>
      </View>
    );
  }
}