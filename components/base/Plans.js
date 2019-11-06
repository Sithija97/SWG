import React, {Fragment} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image} from 'react-native';

export default class PlansScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  //This function returns appropriate URL based on passed status
  renderImageBasedOnStatus = () => {
    switch (this.props.navigation.getParam('status')) {
      case 'student':
        return (
          <Image
            style={{width: 50, height: 50}}
            //source={require('./icon2.png')}
          />
        );
      case 'employee':
        return (
          <Image
            style={{width: 50, height: 50}}
            //source={require('./psswrd.jpg')}
          />
        );
      case 'senior_citizen':
        return (
          <Image
            style={{width: 50, height: 50}}
            //source={require('./Home.jpg')}
          />
        );
    }
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', marginTop: 20}}>Plans</Text>

        <Text>{this.props.navigation.getParam('status')}</Text>
        <Text>{this.props.navigation.getParam('student_status')}</Text>
        <Text>{this.props.navigation.getParam('employee_type')}</Text>
        <Text>{this.props.navigation.getParam('income_level')}</Text>

        {/* Making use of defined functions */}
        {this.renderImageBasedOnStatus()}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    marginBottom: 20,
    borderRadius: 14,
  },
  ButtonText: {
    fontWeight: 'bold',
  },
});
