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
  AsyncStorage
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';

export default class IncomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: 'Awards'},
        {id: 2, name: 'Gifts'},
        {id: 3, name: 'Interest Money'},
        {id: 4, name: 'Salary'},
        {id: 5, name: 'Selling'},
        {id: 6, name: 'Other'},
      ],
      value: 0,
      category: '',
    };
  }
  static navigationOptions = {
    header: null,
  };

  addIncome = () => {
    var {value, category} = this.state;

    console.log('income');
    console.log(value);
    console.log(category);

    AsyncStorage.getItem('@app:session').then(token => {
      fetch('http://192.168.1.151:8080/api/v1/money/income', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json', 
        'Alpha-Auth-Token' : token
      },
      body: JSON.stringify({
        // data pass to server
        date: Date.now(),
        income: value,
        income_category: category,
      }),
    }).then(val => {
      console.log(val);
    });
    });

    
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

  render() {
    return (
      <ImageBackground
        source={require('./Income.jpg')}
        style={styles.container}>
        <View>
          {/*
        <Text style={{paddingTop: 20, fontWeight: 'bold', paddingLeft: 20}}>
          Income
        </Text>
        
        <ModalSelector style={styles.modalSelector}
          data={this.state.data}
          initValue="search..."
          supportedOrientations={['landscape']}
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={(option)=>{ this.setState({sort: option.data})}}
          keyExtractor= {item => item.id}
          labelExtractor= {item => item.name}
        />

         <Text>{this.state.test}</Text>
        */}
        </View>
        <ModalSelector
          data={this.state.data}
          keyExtractor={item => item.id}
          labelExtractor={item => item.name}
          onChange={option => {
            this.setState({category: option.name});
          }}
        />
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
          <Text>Add income</Text>
        </TouchableOpacity>
        <ActionButton buttonColor="#6c5ce7">
          <Icon
            name="md-done-all"
            style={styles.actionButtonIcon}
            onPress={this.addIncome}
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
    borderColor: '#6c5ce7',
    height: '10%',
    width: '80%',
    borderRadius: 5,
    margin: 10,
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
