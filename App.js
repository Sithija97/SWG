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
export default class App extends React.Component {
  render() {
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