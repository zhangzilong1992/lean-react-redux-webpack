import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {increment, decrement} from '../redux/action'
import {connect} from 'react-redux';
import './Index.css'

class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {count, onIncreaseClick, onDecreaseClick, dispatch} = this.props
    return (<div>
      <button onClick={onIncreaseClick}>+</button>
      <button onClick={onDecreaseClick}>-</button>
      <span>count: {count}</span>
      {this.props.children}
    </div>)
  }
}

function mapStateToProps(state) {
  return {count: state.count}
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type: 'increase'}),
    onDecreaseClick: () => dispatch({type: 'decrease'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
