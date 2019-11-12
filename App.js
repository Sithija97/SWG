import React from "react";
import {Button, View, Text, TouchableOpacity,} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator,createBottomTabNavigator} from "react-navigation"


import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/base/Home';
import WelcomeScreen from "./components/base/Welcome";
import SignUpScreen from "./components/base/SignUp";
import LoginScreen from "./components/base/Login";
import LocationScreen from "./components/Location/Location";
import IncomeScreen from './components/category/Income';
import ExpenseScreen from './components/category/Expense';
import SavingsScreen from './components/category/Savings';
import PlansScreen from './components/base/Plans';
import CalanderScreen from './components/calander/Calander';
import CalculatorScreen from './components/calculator/Calculator';
import CategoryScreen from "./components/category/Categories";
import UserInfoScreen from "./components/base/UserInfo";
import ConverterScreen from './components/converter/Converter';
import EventsScreen from './components/events/Events';
import axios from 'axios'

// axios.defaults.baseURL = "http://192.168.1.1:8080/api/v1"

// axios.interceptors.request.use(
//   async config => {
//     const token = await AsyncStorage.getItem("token")
//     if(token){
//       config.headers.Authorization =  token
//       config.headers.
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )


// let instance = axios.create({
//   baseURL: 'https://10.10.23.1/api/v1/',
//   timeout: 10000,
//   headers: {'Alpha-Auth-Token': ''}
// });

// axios.defaults.baseURL = 'https://10.10.24.131/api/v1';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;

    // axios.get('/test/test').then(x=> {
    //   console.log("Fucking ==============");
    //   console.log(x);
    // }).catch();

    // console.log("======================================================");
    axios.defaults.baseURL = 'http://localhost:8080/api/v1';
    return (
      <AppContainr/>
    );
  }
}

const DashTabNavigator = createBottomTabNavigator({
  IncomeScreen,
  ExpenseScreen,
  SavingsScreen,

});

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeScreen,
  //Categories: DashTabNavigator,
  Category:CategoryScreen,
  Events:EventsScreen,
  Calander: CalanderScreen,
  Calculator: CalculatorScreen,
  Converter:ConverterScreen,
  Location: LocationScreen,

},
{
  hideStatusBar: true,
  drawerBackgroundColor: 'rgba(255,255,255,.9)',
  overlayColor: '#dfe4ea',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#4834d4',
  },
});

const AppStackNavigator = createStackNavigator({
    Welcome:{screen: WelcomeScreen},
    SignUp:{screen: SignUpScreen},
    Login:{screen: LoginScreen},
    UserInfo:{screen:UserInfoScreen},
    Plans:{screen:PlansScreen},
    Home:{screen:AppDrawerNavigator},
    Income:{screen:IncomeScreen},
    Expense:{screen:ExpenseScreen},
    Savings:{screen:SavingsScreen},
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return{
      headerStyle: {
        backgroundColor:'#4834d4'
      },
      //headerTitle:'',
      headerTintColor:'#fff',
      headerTitleStyle: {
        fontWeight:'bold',
        textAlign:'center',
        flex:1
      },
      headerLeft: (
        <Icon
        style={{paddingLeft:10, color:'white'}}
        onPress={() => navigation.openDrawer()}
        name="md-menu"
        size={30}
        />
      ),
      headerRight: (
        <View/>
      )
    }
  }
});

const AppContainr = createAppContainer(AppStackNavigator);
