'use strict' // javascript的严格模式

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Discolor from '../components/discolor';
import * as discolorActions from '../actions/discolorActions';
import { connect } from 'react-redux';

class DiscolorApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Discolor
        color={state.color}
        {...actions} />
    );
  }
}

/*
 *
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 *
 * 这里只说第一个参数，其他的参考：http://cn.redux.js.org/docs/react-redux/api.html
 *
 * [mapStateToProps(state, [ownProps]): stateProps] (Function): 如果定义该参数，组件将会监听 Redux store 的变化。
 * 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
 * 该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了这个参数，你的组件将不会监听 Redux store。
 * 如果指定了该回调函数中的第二个参数 ownProps，则该参数的值为传递到组件的 props，而且只要组件接收到新的 props，mapStateToProps 也会被调用。
 *
 * 所以这里state: state.discolor中的discolor其实就是reducers/discolor.js
 * 一旦Redux store变化这个回调函数就会执行discolor，discolor就会返回新的state，
 * 为什么discolor会返回新的state，因为它是reducer
 */
export default connect(state => ({
    state: state.discolor
  }),
  (dispatch) => ({
    /*
     * 再来说下 bindActionCreators 的作用: 把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
     * 什么意思呢？在这里的bindActionCreators返回值就是普通对象：
     *   {
     *     change2red: dispatch(discolorActions.change2red),
     *     change2green: dispatch(discolorActions.change2green),
     *   }
     */
    actions: bindActionCreators(discolorActions, dispatch),
  })
)(DiscolorApp);
