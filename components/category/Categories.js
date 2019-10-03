import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Accordion,
  dataArray
} from 'native-base';

const dataIncome = [
  {title: 'Income', content: 'here we have included some categories of Income'},
];

const dataExpenses = [
  {title: 'Expences', content: 'here we have included some categories of Expences'},
];

export default class CategoryScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./categories.png')} style={styles.image} />
    ),
  };
  render() {
    return (
      <Container style={{padding:10}}>
  
        <Content>
        <Accordion dataArray={dataIncome} expanded={0} />
          <Card>
            <CardItem>
              <Icon active name="trophy" />
              <Text>Awards</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="gift" />
              <Text>Gifts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="pulse" />
              <Text>Interest Money</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Salaray </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Icon active name="briefcase" />
              <Text>Selling</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="redo" />
              <Text>Other</Text>
            </CardItem>
          </Card>

          <Accordion dataArray={dataExpenses} expanded={0} />

          <Card>
            <CardItem>
              <Icon active name="paper" />
              <Text>Bills and Utilities</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="battery-charging" />
              <Text>Elctricity</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="beaker" />
              <Text>Gas</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="logo-google" />
              <Text>Internet</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="call" />
              <Text>Phone</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="filing" />
              <Text>Rentals</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="water" />
              <Text>Water</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="business" />
              <Text>Business</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="laptop" />
              <Text>Education</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="musical-notes" />
              <Text>Entertainment</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="videocam" />
              <Text>Movies</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Family</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Children and Babies</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Home Improvement/Services</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Fees and Charges</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Food and Beverage</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Restaurants</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Friends and Lover</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Gifts and Donations</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Charity</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Funeral</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Marriage</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Health and Fitness</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Personal Care</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Sports</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Insuarances</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Investments</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Shopping</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Accessories</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Clothing</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Electronics</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Transportation</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Maintenance</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Parking Fees</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Petrol</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Taxi</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Travel</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Withdrawal</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Others</Text>
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
    height: 30,
  },
});
