import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Income"
            onPress={() => this.props.navigation.navigate('Income')}>
            <Icon style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Expenses"
            onPress={() => this.props.navigation.navigate('Expense')}>
            <Icon style={styles.actionButtonIcon}/>
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Savings"
            onPress={() => this.props.navigation.navigate('Savings')}>
            <Icon style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
