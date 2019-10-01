import React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function() {
      that.Hide_Splash_Screen();
    }, 5000);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={require('./Splash.jpg')}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./icon2.0.png')} />

          <Text style={styles.logoTitle}>"because money matters"</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainerSignUp}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.ButtonTextSignUp}>New to Smart Wallet Guide</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainerLogin}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.ButtonTextLogin}>Already using Smart Wallet Guide</Text>
        </TouchableOpacity>

        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#f1f2f6',//#f1f2f6
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
    width: 180,
    height: 180,
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    color: '#4834d4',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  buttonContainerSignUp: {
    alignItems: 'center',
    backgroundColor: '#283de8',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    width:350
  },
  buttonContainerLogin:{
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    width:350
  },
  ButtonTextSignUp: {
    fontWeight: 'bold',
    color:'#f1f2f6'
  },
  ButtonTextLogin: {
    fontWeight: 'bold',
    //color:'#4834d4'
  },
});
//#4834d4
//#dfe4ea