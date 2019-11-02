import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IncomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{paddingTop: 20, fontWeight: 'bold', paddingLeft: 20}}>
          Income
        </Text>
        <View style={styles.SectionStyle}>
          
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Value"
            underlineColorAndroid="transparent"
            keyboardType = "number-pad"
          />
        </View>
        <ActionButton buttonColor="#9b59b6">
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
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
