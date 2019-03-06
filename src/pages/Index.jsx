import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './Index.css'

class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { count, dispatch } = this.props
    return (<div>
      <button onClick={() => { dispatch({ type: 'save', count: count + 1 }) }}>+</button>
      <button onClick={() => { dispatch(onDecreaseClick()) }}>-</button>
      <button onClick={() => { dispatch(onIncreaseClickSync()) }}>+ sync</button>
      <button onClick={() => { dispatch(onDecreaseClickSync()) }}>- sync</button>
      <span>count: {count}</span>
      {this.props.children}
    </div >)
  }
}

function mapStateToProps(state) {
  return { count: state.count }
}

export default connect(mapStateToProps)(Index)
