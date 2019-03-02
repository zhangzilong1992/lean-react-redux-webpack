import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Index from '../pages/Index.jsx'
import Test from '../pages/Test.jsx'

class IndexRouter extends Component {
  render() {
    console.log(123)
    console.log(345)
    return (<Router>
      <div>
        <Route path="/" component={Index}/>
        <Route path="/test" component={Test}/>
      </div>
    </Router>)
  }
}

export default IndexRouter
