import React from 'react';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';

export default class CalculatorScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight:'bold'}}>Calculator</Text>
      </View>
    );
  }
}
