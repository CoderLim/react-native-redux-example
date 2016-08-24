/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Counter from './js/components/Counter';

class Counters extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter decrementFn={()=>{}} incrementFn={()=>{}} incrementWithDelayFn={()=>{}}>
          {0}
        </Counter>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Counters', () => Counters);
