import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';

export default class ExpenseScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  // componentDidMount(){
  //     axios.get('http://10.10.24.131:8080/api/v1/test/test')
  //     .then(response=>{
  //       console.log(response.data)
  //       this.setState({test: response.data})
  //     })
  //     .catch(error=>{console.log(error),
  //       this.setState({test: error.message})
  //     })
  // }

  addSaving = () => {
    var {value, category} = this.state;

    console.log('income');
    console.log(value);
    console.log(category);

    AsyncStorage.getItem('@app:session').then(token => {
      fetch('http://192.168.1.151:8080/api/v1/money/saving', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json', 
        'Alpha-Auth-Token' : token
      },
      body: JSON.stringify({
        // data pass to server
        date: Date.now(),
        income: value
      }),
    }).then(val => {
      console.log(val);
    });
    });

    
  };

  render() {
    return (
      <ImageBackground
        source={require('./Savings.jpg')}
        style={styles.container}>
          <View style={styles.SectionStyle}>
            <TextInput
              placeholder="Enter Value"
              underlineColorAndroid="transparent"
              keyboardType="number-pad"
              onChangeText={value => {
                this.setState({value});
              }}
            />
          </View>

          <TouchableOpacity onPress={this.addIncome}>
          <Text>Add saving</Text>
        </TouchableOpacity>
        <ActionButton buttonColor="#6c5ce7">
          <Icon
            name="md-done-all"
            style={styles.actionButtonIcon}
            onPress={this.addSaving}
          />
        </ActionButton>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // height: '100%',
    resizeMode: 'cover',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor:'#2ed573',
    height: '10%',
    width: '80%',
    borderRadius: 5,
    margin: 5,
  },
  modalSelector: {
    width: '80%',
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
