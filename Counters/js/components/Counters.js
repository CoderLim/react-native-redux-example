/*
 *
 *  @flow
 *
 */

 import React, {PropTypes, Component} from 'react';
 import {
   StyleSheet,
   Text,
   TouchableHighlight,
   View,
 } from 'react-native';

import Button from './Button';
import Counter from './Counter';

export default class Counters extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    addFn: PropTypes.func.isRequired,
  };

  render() {
    const { children, addFn } = this.props;
    return (
      <View style={styles.container}>
        {children}
        <Button onClick={addFn}>Add New Counter</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
