import {
  createStore,
  applyMiddleware
} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
const initValue = {
  count: 0
}
const store = createStore(reducer, initValue, applyMiddleware(thunk))

export default store
