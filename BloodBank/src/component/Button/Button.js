import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonBlockExample extends Component {
  render() {
    return (
      <Button style={{ marginTop: 50, backgroundColor: '#be1d2d', width: 300, marginLeft: 10 }}>
        <Text style={{ textAlign: 'center' }}>Login</Text>
      </Button>
    );
  }
}