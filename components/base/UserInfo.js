import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class UserInfoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      status: '',
      student_type: '',
      employee_type: '',
      income_level: '',
    };
  }
  render() {
    return (
      <ImageBackground
        source={require('./UserInfo.jpg')}
        style={styles.imagecontainer}>
        <ScrollView style={styles.container}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#5352ed',
              marginTop: 10,
              marginBottom: 10,
              fontSize: 30,
              alignContent: 'center',
            }}>
            Tell us a bit about Yourself
          </Text>
          <Text style={{fontWeight: 'bold', color: '#3742fa', marginTop: 10}}>
            Mandatory
          </Text>

          <View style={{padding: 20}}>
            <Text>select your status</Text>
            <RNPickerSelect
              onValueChange={value => this.setState({status: value})}
              items={[
                {label: 'Student', value: 'student'},
                {label: 'Employee', value: 'employee'},
                {label: 'Senior Citizen', value: 'senior_citizen'},
              ]}
            />
          </View>

          <View style={{padding: 20}}>
            <Text>If Student, you're a..</Text>
            <RNPickerSelect
              onValueChange={value => this.setState({student_status: value})}
              items={[
                {label: 'School Student', value: 'school student '},
                {
                  label: 'University Student - Private',
                  value: 'university student - private',
                },
                {
                  label: 'University Student - Government',
                  value: 'university student - government',
                },
              ]}
            />
          </View>

          <View style={{padding: 20}}>
            <Text>If Employee, you're from..</Text>
            <RNPickerSelect
              onValueChange={value => this.setState({employee_type: value})}
              items={[
                {label: 'Private Sector', value: 'private sector'},
                {label: 'Government Sector', value: 'government sector'},
              ]}
            />
          </View>

          <Text style={{fontWeight: 'bold', color: '#5352ed'}}>Optional</Text>

          <View style={{padding: 20}}>
            <Text>Your income level is..</Text>
            <RNPickerSelect
              onValueChange={value => this.setState({income_level: value})}
              items={[
                {label: 'High-level', value: 'high-level'},
                {label: 'Mid-level', value: 'mid-level'},
                {label: 'Low-level', value: 'low-level'},
              ]}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              this.props.navigation.navigate('Plans', {
                status: this.state.status,
                student_status: this.state.student_status,
                employee_type: this.state.employee_type,
                income_level: this.state.income_level,
              })
            }>
            <Text style={styles.ButtonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  container: {
    paddingHorizontal: 10,
    padding: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 260,
    borderRadius: 20,
  },
  ButtonText: {
    fontWeight: 'bold',
  },
  imagecontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding: 20,
  },
});
