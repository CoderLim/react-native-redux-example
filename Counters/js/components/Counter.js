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

 export default class Counter extends Component {
   static propTypes = {
      decrementFn: PropTypes.func.isRequired,
      children: PropTypes.number.isRequired,
      incrementFn: PropTypes.func.isRequired,
      incrementWithDelayFn: PropTypes.func.isRequired,
   };

   render() {
     const { decrementFn, children, incrementFn, incrementWithDelayFn } = this.props;
     return (
       <View style={styles.container}>
        <Button onClick={decrementFn}>-</Button>
        <Text style={styles.label}>{children}</Text>
        <Button onClick={incrementFn}>+</Button>
        <Button onClick={incrementWithDelayFn}>+ with delay</Button>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
   label: {
     width: 40,
     textAlign: 'center',
   }
 });
