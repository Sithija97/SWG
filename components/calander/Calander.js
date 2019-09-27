import React from 'react';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';

export default class CalanderScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ()=>(
      <Image  source={require('./calander.png')}
      style={styles.image}
      />
    ),
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight:'bold'}}>Calander</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30
  },
})