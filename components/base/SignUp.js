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
import AppConstants from '../AppConstants';
export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      occupation: '',
      password: '',
      confirmPassword: '',
    };
  }

  signUp = () => {
    var {name, email, occupation, password, confirmPassword} = this.state;
    console.log(
      name +
        ' ' +
        email +
        ' ' +
        occupation +
        ' ' +
        password +
        ' ' +
        confirmPassword,
    );

    if (
      name === '' ||
      occupation === '' ||
      password === '' ||
      confirmPassword === '' ||
      email === ''
    ) {
      console.log('Fields Empty');
      this.setState({
        name: '',
        email: '',
        occupation: '',
        password: '',
        confirmPassword: '',
      });
    } else if (confirmPassword == password) {
      // console.log('Password Not Match');
      // this.setState({password:'', confirmPassword:''});
      console.log('email=>', email);
      const data = {
        name: this.state.name,
        email: this.state.email,
        username: this.state.email,
        occupation: this.state.occupation,
        password: this.state.password,
      };
      console.log(data);

      fetch('http://192.168.1.151:8080/api/v1/' + 'authentication/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => {
        this.props.navigation.navigate('UserInfo')
        console.log(response);
      });
      // .then((responseJson) =>{
      //   console.log(responseJson)
      //   if(responseJson === 'exists'){
      //     Alert.alert('Email Already Taken!');
      //     return
      //   }else if(responseJson === 'ok'){
      //     Alert.alert('Successfully User Added');
      //   }else if(responseJson === 'not'){
      //     Alert.alert('Failed! Try Again');
      //   }
      //   this.setState({name:'',email:'',occupation:'',password:'',confirmPassword:''});
      // })
    } else {
      Alert.alert('passwords not matched');
    }
  };

  // SignUp = async() => {
  //   Axios.post('/authentication/register', {
  //     name:this.state.name,
  //     email:this.state.email,
  //     occupation:this.state.occupation,
  //     password:this.state.password
  //   })

  //   .then(res => {
  //     if( res.status === 200){
  //       Alert.alert('Logged in succeddfully');
  //       this.props.navigation.navigate('UserInfo');
  //     }else{
  //       Alert.alert('Invalid credintials');
  //     }
  //   })

  //   .catch(err => {
  //     Alert.alert('Error!');
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
            <Image source={require('./person.png')} style={styles.ImageStyle} />

            <TextInput
              style={{flex: 1}}
              placeholder="Enter Your Name Here"
              underlineColorAndroid="transparent"
              value={this.state.name}
              onChangeText={name => {
                this.setState({name});
              }}
            />
          </View>

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
              placeholder="Enter Your occupation Here"
              underlineColorAndroid="transparent"
              value={this.state.occupation}
              onChangeText={occupation => {
                this.setState({occupation});
              }}
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
              placeholder="Enter Your Email Here"
              underlineColorAndroid="transparent"
              value={this.state.email}
              onChangeText={email => {
                this.setState({email});
              }}
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
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={password => {
                this.setState({password});
              }}
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
              placeholder="Enter Your Password again"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => {
                this.setState({confirmPassword});
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.signUp}>
            <Text style={styles.ButtonText}>SignUp</Text>
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
