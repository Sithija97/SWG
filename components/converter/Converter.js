import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import axios from 'axios';

export default class ConverterScreen extends React.Component {
  convert(){
   var x = this.curinput;
  //  this.setState({result:x})
  //  var result = x * state.Currency;
  //  this.setState({result:value});
  var temp = this.state.Currency;
  this.setState({result: temp});


  }
  
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./git-compare.png')} style={styles.image} />
    ),
  };
  constructor() {
    super();
    this.state = {
      Currency: '',
      result : ''
     
    };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.SectionStyle}>
          <TextInput id="curinput"
            //style={{flex: 1}}
            placeholder="Enter Currency"
            underlineColorAndroid="transparent"
          />
        </View>

        
        <RNPickerSelect
          onValueChange={value => this.setState({Currency: value})}
          items={[
            {label: 'US Dollar', value: '0.45'},
            {label: 'LKR', value: '0.55'},
            {label: 'Ind Rupee', value: '0.65'},
          ]}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.convert()}>
          <Text style={styles.ButtonText}>Convert</Text>
        </TouchableOpacity>

        <View style={{backgroundColor:'#f1f2f6'}}>
          <Text>{this.state.result}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    //marginTop: 20,
    //marginBottom: 20,
    //marginLeft: 260,
    borderRadius: 20,
  },
  ButtonText: {
    fontWeight: 'bold',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
});
