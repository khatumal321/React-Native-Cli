import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (

      <Form style={{ backgroundColor: 'none' }}>
        <Item floatingLabel style={{ margin: 15 }} >
          <Label style={{ fontSize: 18, color: '#be1d2d' }}>Username</Label>
          <Input style={{ borderColor: 'red', color: '#be1d2d' }} />
        </Item>
        <Item floatingLabel>
          <Label style={{ fontSize: 18, color: '#be1d2d' }}>Password</Label>
          <Input style={{ borderColor: 'red', color: '#be1d2d' }} secureTextEntry={true} />
        </Item>
      </Form>

    );
  }
}