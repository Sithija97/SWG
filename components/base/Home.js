import React from 'react';
import { Button, View, Text,Image, StyleSheet } from 'react-native';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ()=>(
      <Image  source={require('./HomeIcon.png')}
      style={styles.image}
      />
    ),
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
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