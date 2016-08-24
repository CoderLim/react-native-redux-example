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
 } from 'react-native';

 export default class Button extends Component {
   static propTypes = {
     children: PropTypes.string.isRequired,
     onClick: PropTypes.func.isRequired,
   };

   constructor(props) {
     super(props);
   }

   render() {
     let { onClick, children } = this.props;
     return (
       <TouchableHighlight onPress={onClick} style={styles.button}>
           <Text>{children}</Text>
       </TouchableHighlight>
     )
   }
 }

 const styles = StyleSheet.create({
   button: {
     padding: 20,
     backgroundColor: 'lightgray',
     alignItems: 'center',
     justifyContent: 'center',
     margin: 5,
   }
 });
