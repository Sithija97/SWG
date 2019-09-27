import React from 'react';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';

export default class IncomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Income</Text>
        </View>
      </View>
    );
  }
}
