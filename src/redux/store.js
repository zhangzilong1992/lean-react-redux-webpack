import {
  createStore
} from 'redux'
import reducer from './reducer'
const initValue = {
  count: 0
}

const store = createStore(reducer, initValue)

export default store
