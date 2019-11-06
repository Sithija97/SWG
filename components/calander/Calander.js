import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import Calendar from 'react-native-calendario';
export default class CalanderScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./calander.png')} style={styles.image} />
    ),
  };
  render() {
    return (
      <View>
        <Calendar
          onChange={range => console.log(range)}
          minDate="2018-04-20"
          startDate="2018-04-30"
          endDate="2018-05-05"
          theme={{
            weekColumnTextStyle: {
              color: '#8854d0',
              fontWeight: 'bold',
            },
            weekColumnStyle: {
              paddingVertical: 20,
            },
            weekColumnsContainerStyle: {
              backgroundColor: '#f1f2f6',
            },
            monthTitleStyle: {
              color: '#3c40c6',
              fontWeight: 'bold',
            },
            nonTouchableDayContainerStyle: {
              backgroundColor: '#c56cf0',
            },
            nonTouchableDayTextStyle: {
              color: '#ffffff',
              fontWeight: 'bold',
            },
            dayTextStyle: {
              color: '#1e272e',
              fontWeight: 'bold',
            },
            activeDayContainerStyle: {
              backgroundColor: '#f1f2f6',
            },
            activeDayTextStyle: {
              color: '#3742fa',
              fontWeight: 'bold',
            },
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
