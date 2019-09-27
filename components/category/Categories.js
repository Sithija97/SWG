import React from 'react';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';

export default class CategoryScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ()=>(
      <Image  source={require('./categories.png')}
      style={styles.image}
      />
    ),
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight:'bold'}}>Categories</Text>
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