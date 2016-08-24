/*
 * @flow
 */

 import React, { Component, PropTypes } from 'react';
 import {
   StyleSheet,
   View,
 } from 'react-native';
import { connet } from 'react-redux';

import { Counter, Counters } from '../components';
import * as actions from '../actions/actions';

class App extends Component {
  static propTypes = {
    addNewCounter: PropTypes.func.isRequired,
    counters: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementWithDelay: PropTypes.func.isRequired,
  }

  _renderCounters(counters, decrement, increment, incrementWithDelay) {
    return Object.keys(counters).map((id) => {
      const value = counters[id];
      return (
        <Counter
          key={id}
          decrementFn={() => decrement(id)}
          incrementFn={() => increment(id)}
          incrementWithDelayFn={() => incrementWithDelay(id)}>
          {value}
        </Counter>
      )
    });
  }

  render() {
    const {
      addNewCounter,
      counters,
      decrement,
      increment,
      incrementWithDelay,
    } = props;

    return (
      <View style={styles.container}>
        <Counters addFn={addNewCounter}>
          {this._renderCounters(counters, decrement, increment, incrementWithDelay)}
        </Counters>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect(
  (state) => ({
    counters: state.app.counters,
  }),
  (dispatch) => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    increment: (id) => dispatch(actions.increment(id)),
    decrement: (id) => dispatch(actions.decrement(id)),
    incrementWithDelay: (id) => dispatch(actions.incrementWithDelay(id)),
  })
)(App);
