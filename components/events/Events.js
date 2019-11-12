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

export default class EventsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      events:'',
      newEvent:''
    };
  }

  componentDidMount(){

  }

  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./bookmark.png')} style={styles.image} />
    ),
  };


  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{paddingTop: 20, fontWeight: 'bold', paddingLeft: 20}}>
          Special Events
        </Text>
        <View style={styles.SectionStyle}>
          
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Value"
            underlineColorAndroid="transparent"
            onChangeText={(newEvent) =>{this.setState({newEvent})}}
            keyboardType = "number-pad"
          />
        </View>
        <ActionButton buttonColor="#ffa502">
          <Icon name="md-done-all" style={styles.actionButtonIcon} onPress={this.addEvent} />
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

  image: {
    width: 30,
    height: 30,
  },
});
