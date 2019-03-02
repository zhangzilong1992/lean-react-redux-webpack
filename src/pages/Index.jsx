import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Index extends Component {
  render() {
    return (<div>
      <Link to="test">test</Link>
      {this.props.children}
    </div>)
  }
}

export default Index
