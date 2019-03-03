import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {hot} from 'react-hot-loader/root'
import Index from '../pages/Index.jsx'
import Test from '../pages/Test.jsx'

class IndexRouter extends Component {
  render() {
    return (<Router>
      <div>
        <Route path="/" component={Index}/>
        <Route path="/test" component={Test}/>
      </div>
    </Router>)
  }
}

export default hot(IndexRouter)
