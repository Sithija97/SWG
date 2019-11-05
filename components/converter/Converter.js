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
  getdata = async () => {
    //variables
    var inputvalue = this.state.text;
    var Currency = this.state.Currency;
    var lkr2inr = inputvalue * 0.38;
    if (Currency === 'INR') {
      // console.warn("you have input indian rupees");

      this.setState({result: lkr2inr});
    } else {
      var request = new XMLHttpRequest();
      request.onreadystatechange = e => {
        if (request.readyState !== 4) {
          return;
        }

        if (request.status === 200) {
          // console.warn('success', request.responseText);
          var res = JSON.parse(request.responseText);
          var ratio = res.rates[this.state.Currency];
          var t = ratio * lkr2inr;
          this.setState({result: t});

          // console.warn(result);
        } else {
          console.error('error');
        }
      };
      var x = 'http://api.openrates.io/latest?base=INR&symbols=';
      var y = this.state.Currency;
      var sentad = x.concat(y);
      request.open('GET', sentad);
      request.send();
    }
  };
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./git-compare.png')} style={styles.image} />
    ),
  };
  constructor() {
    super();
    this.state = {
      text: '',
      Currency: '',
      result: '',
      temp2: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.SectionStyle}>
          <TextInput
            //style={{flex: 1}}
            placeholder="Enter Currency in LKR"
            underlineColorAndroid="transparent"
            keyboardType="number-pad"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
        </View>

        <RNPickerSelect
          onValueChange={value => this.setState({Currency: value})}
          items={[
            {label: 'US Dollar', value: 'USD'},
            {label: 'Canadian dolor', value: 'CAD'},
            {label: 'Ind Rupee', value: 'INR'},
            {label: 'New Zealand Dolor', value: 'NZD'},
          ]}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.getdata()}>
          <Text style={styles.ButtonText}>Convert</Text>
        </TouchableOpacity>

        {/* <View style={{backgroundColor:'#f1f2f6'}}>
          <Text>{this.state.result}</Text>
        </View> */}
        <View style={{backgroundColor: '#f1f2f6'}}>
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
