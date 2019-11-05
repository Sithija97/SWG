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
        <ActionButton buttonColor="#ff4757">
          <ActionButton.Item
            buttonColor="#6c5ce7"
            title="Income"
            onPress={() => this.props.navigation.navigate('Income')}>
            <Icon style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1e90ff"
            title="Expenses"
            onPress={() => this.props.navigation.navigate('Expense')}>
            <Icon style={styles.actionButtonIcon}/>
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#2ed573"
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
