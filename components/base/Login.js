import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {SocialIcon} from 'react-native-elements';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground
        source={require('./Hometest.jpg')}
        style={styles.container}>
        <View>
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
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>

          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            style={styles.buttonContainerSocial}
            onPress={() => this.props.navigation.navigate('')}
          />
          <SocialIcon
            title="Sign In With Google"
            button
            type="google"
            style={styles.buttonContainerSocial}
            onPress={() => this.props.navigation.navigate('')}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    width: 45,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    margin: 10,
    marginBottom: 20,
    borderRadius: 8,
    width: 300,
  },
  ButtonText: {
    fontWeight: 'bold',
    //color:'#4834d4'
  },
  buttonContainerSocial: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    marginBottom: 20,
    borderRadius: 8,
    width: 300,
    height: 40,
  },

});
