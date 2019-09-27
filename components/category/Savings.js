import React from 'react';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';


export default class SavingsScreen extends React.Component {
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Savings</Text>
        </View>
      </View>
    );
  }
}
