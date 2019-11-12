import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  Alert,
  AsyncStorage
} from 'react-native';
import {SocialIcon} from 'react-native-elements';

import Axios from 'axios';
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }

  login = () =>{
    console.log('loggin in')
    var {username,password} = this.state

    if(username === '' || password === ''){
      Alert.alert('Field Empty');
      return;
    }

    fetch("http://192.168.1.151:8080/api/v1/authentication/auth",{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        // data pass to server
        email:username,
        username:username,
        password:password
      })
    })
    .then((response) => response.json())
    .then((responseJson) =>{
      console.log(responseJson.token);
      AsyncStorage.setItem('@app:session', responseJson.token);
      this.props.navigation.navigate('Home');
      // console.log(responseJson);
      // if(responseJson === 'ok'){
      //   this.props.navigation.navigate('Home');
      // }else if(responseJson === 'not'){
      //   Alert.alert('User name or Password Error');
      //   this.setState({username:'',password:''});
      // }
    })
  }

  // Login = async() => {
  //   Axios.post('/authentication/auth', {
  //     username:this.state.username,
  //     password:this.state.password
  //   })

  //   .then(res => {
  //     Alert.alert(this.state.username + ' ' + this.state.password);
  //     if( res.status === 200){
  //       Alert.alert('Logged in succeddfully');
  //       this.props.navigation.navigate('Home');
  //     }else{
  //       Alert.alert('Invalid credintials');
  //     }
  //   })

  //   .catch(err => {
  //     Alert.alert(err);
  //     console.log(err);
  //   });
  // };

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
              onChangeText={(username) =>{this.setState({username})}}
              value={this.state.username}
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
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(password) =>{this.setState({password})}}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.login}>
            <Text style={styles.ButtonText} >Login</Text>
          </TouchableOpacity>

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

/*
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
*/