import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {

  render() {
    return (
     <View>
     <Text>Present: {this.props.navigation.getParam('present')}</Text>
      <Text>Absent: {this.props.navigation.getParam('absent')}</Text>
      </View>
    );
  }
}


