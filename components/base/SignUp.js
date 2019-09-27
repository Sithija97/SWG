import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
            //We are showing the Image from online
            source={require('./mail.png')}
            //You can also show the image from you project directory like below
            //source={require('./Images/user.png')}

            //Image Style
            style={styles.ImageStyle}
          />

          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Email Here"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.SectionStyle}>
          <Image
            //We are showing the Image from online
            source={require('./psswrd.png')}
            //You can also show the image from you project directory like below
            //source={require('./Images/phone.png')}

            //Image Style
            style={styles.ImageStyle}
          />

          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Password here"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Plans')}>
          <Text style={styles.ButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 40,
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

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    width:300
  },
  ButtonText: {
    fontWeight: 'bold',
    //color:'#4834d4'
  },
});
