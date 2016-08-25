/*
 *
 *  这里就是单纯的RN控件定义了
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Discolor extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    const { color, change2red, change2green} = this.props;

    return (
      <View style={[styles.container, {
          backgroundColor: color,
      }]}>
        <TouchableHighlight onPress={change2red} style={styles.button}>
          <Text>change2red</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={change2green} style={styles.button}>
          <Text>change2green</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
});
