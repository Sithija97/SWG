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

export default class ConverterScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./git-compare.png')} style={styles.image} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.SectionStyle}>
          <TextInput
            //style={{flex: 1}}
            placeholder="Enter Currency"
            underlineColorAndroid="transparent"
          />
        </View>

        <RNPickerSelect
          onValueChange={value => this.setState({status: value})}
          items={[
            {label: 'US Dollar', value: 'US '},
            {label: 'LKR', value: 'LKR'},
            {label: 'Ind Rupee', value: 'Ind Rupee'},
          ]}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('')}>
          <Text style={styles.ButtonText}>Convert</Text>
        </TouchableOpacity>
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
