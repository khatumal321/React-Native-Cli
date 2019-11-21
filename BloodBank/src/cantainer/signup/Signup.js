import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Label, View } from 'native-base';
import Input from './../../component/input/Input'
export default class FixedLabelExample extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 50 }}
          source={require('./../../component/Logo/Blood-bank.png')}
        />
        <Input />
      </View>
    );
  }
}