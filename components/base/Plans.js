import React, {Fragment} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class PlansScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  //This function returns appropriate URL based on passed status
  renderImageBasedOnStatus = () => {
    console.log('+++' + this.props.navigation.getParam('status') + '+++');
    // if(this.props.navigation.getParam('status') == 'student'){
    //   return (
    //     <Image
    //       style={{width: 500, height: 250}}
    //       source={require('./18-gov.png')}
    //     />
    //   );
    // }else{
    //   return (
    //     <Image
    //       style={{width: 500, height: 250}}
    //       source={require('./em.png')}
    //     />
    //   );
    // }
    switch (this.props.navigation.getParam('status')) {
      case 'student':
        console.log('stu');
        switch(this.props.navigation.getParam('student_status')){
          case 'university student - private':
              return (
                <Image
                  style={{width: 500, height: 250}}
                  source={require('./18+p.png')}
                />
              );
            case 'university student - government':
                return (
                  <Image
                    style={{width: 500, height: 250}}
                    source={require('./18+G.png')}
                  />
                );
        }
        
      case 'employee':
        console.log('emp');
        return (
          <Image
            style={{width: 500, height: 250}}
            source={require('./em.png')}
          />
        );
      case 'senior_citizen':
        console.log('cit');
        return (
          <Image
            style={{width: 500, height: 250}}
            source={require('./senict.png')}
          />
        );
    }
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', marginTop: 20}}>Plans</Text>

        <Text>{this.props.navigation.getParam('status')}</Text>
        {/* <Text>{this.props.navigation.getParam('student_status')}</Text>
        <Text>{this.props.navigation.getParam('employee_type')}</Text>
        <Text>{this.props.navigation.getParam('income_level')}</Text> */}

        {/* Making use of defined functions */}
        {this.renderImageBasedOnStatus()}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    marginBottom: 20,
    borderRadius: 14,
  },
  ButtonText: {
    fontWeight: 'bold',
  },
});
