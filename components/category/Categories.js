import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

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
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Income</Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Income</Text>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30
  },
})