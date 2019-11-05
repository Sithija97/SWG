import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios'

export default class IncomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{ id: 5, name: 'Red Apples'},{id: 1, name: 'Banana'}],
      test: 'yes'
    }  
  }
  static navigationOptions = {
    header: null,
  };

  // componentDidMount(){
  //     axios.get('http://10.10.24.131:8080/api/v1/test/test')
  //     .then(response=>{
  //       console.log(response.data)
  //       this.setState({test: response.data})
  //     })
  //     .catch(error=>{console.log(error),
  //       this.setState({test: error.message})
  //     })
  // }

  render() {
    return (
      <View style={{flex: 1}}>
        {/*
        <Text style={{paddingTop: 20, fontWeight: 'bold', paddingLeft: 20}}>
          Income
        </Text>
        
        <ModalSelector style={styles.modalSelector}
          data={this.state.data}
          initValue="search..."
          supportedOrientations={['landscape']}
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={(option)=>{ this.setState({sort: option.data})}}
          keyExtractor= {item => item.id}
          labelExtractor= {item => item.name}
        />
        */}
        <Text>{this.state.test}</Text>
        <ModalSelector
          data={this.state.data}
          keyExtractor= {item => item.id}
          labelExtractor= {item => item.name}
        />
        <View style={styles.SectionStyle}>
          
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Value"
            underlineColorAndroid="transparent"
            keyboardType = "number-pad"
          />
        </View>
        <ActionButton buttonColor="#6c5ce7">
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
  modalSelector: {
    width:"80%", 
    marginLeft: 5, 
    borderWidth: 1,
    borderColor: 'gray', 
    backgroundColor:'white', 
    borderRadius: 5
  }
});

/*
/////////////////////////////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ProductsList from './ProductsList';
import {fetchProductList} from '../Redux/Actions/productListActions';
import {connect} from 'react-redux';
import {Locaton, Categories} from '../../Menu/screenNames';
import SearchPlace from '../../Map/SearchPlace';
import SearchInput, {createFilter,} from 'react-native-search-filter';
import { TextInput } from 'react-native-gesture-handler';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';
const KEYS_TO_FILTERS = ['name', 'description', 'shortDescription','category'];

class Products extends Component {
  static navigationOptions = { title: "products" };

  constructor(props){
    super(props);
    this.state = {
      search: '',
      sort: '',
      categoriesData: [],
    }
  }

  componentDidMount(){
      this.props.fetchProductList(this.props.navigation.getParam('id', '-'),);
      axios.get('https://backend-webapi20191102020215.azurewebsites.net/api/categories')//http://192.168.43.15:5001/api
      .then(response=>{
        this.setState({ categoriesData: response.data})//[...this.state.categoriesData, response.data]
        console.log(response.data)
      })
      .catch(error=>{console.log(error)})
  }

  searchUpdated(term) {
    this.setState({ search: term })
  }

  render () {
    const filteredProducts = this.props.productsList.products.filter(createFilter(this.state.search+" "+this.state.sort, KEYS_TO_FILTERS));
    let productList=<ProductsList data={filteredProducts} navigation={this.props.navigation} />;
    var loading=this.props.productsList.loading;
    //var done=this.props.productsList.loading 

    if(loading)
      return (<ActivityIndicator size="large" style={{flex: 1, alignItems:'center'}} />);
    else 
    return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginTop: 5, width: widthScreen,}}>
            <ModalSelector style={styles.modalSelector}
              data={this.state.categoriesData}
              initValue="search by category..."
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={(option)=>{ this.setState({sort: option.categoryName})}}
              keyExtractor= {item => item.id}
              labelExtractor= {item => item.categoryName}
            >
            </ModalSelector>
        
            <SearchInput  
              onChangeText={(term) => { this.searchUpdated(term), console.log(filteredProducts)}} 
              style={styles.serchText}
              placeholder="find products..."
            />
          </View>
        <ScrollView>
          <View style={styles.container}>
            {productList}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps=state=>{
  return {
    productsList: state.productsList,
  };
}

export default connect(mapStateToProps,{
  fetchProductList,
})(Products);

const heightScreen=Dimensions.get('window').height;
const widthScreen=Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    backgroundColor: '#D3D3D3', 
    //justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 5,
    marginLeft: 10,
    width: 30,
    height:30,
  },
  textLocation:{
    fontSize: 16,
    fontWeight: 'normal',
    color:'#593196'
  },
  text:{
    fontSize: 16,
    fontWeight: 'normal',
    margin: 10,
    //color:'#593196'
  },
  serchText: {
    width: widthScreen/2-5,
    height: 38,
    marginLeft: 10,
    marginRight: 5,
    fontSize: 17,
    marginLeft: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    textAlign:'center',
    backgroundColor: 'white'
  },
  
});
*/