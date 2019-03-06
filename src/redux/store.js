import {
  createStore,
  applyMiddleware
} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import Model from './model'
const initValue = {
  count: 0
}

const testMiddleware = store => next => action => {
  // console.log(store, next, action)
  if (action.type === 'save') {
    next(action)
  } else if (typeof action === 'function') {
    
  }
  // if (typeof action === 'function') {
  //   action(store.dispatch, store.getState)
  // } else {
  //   next(action)
  // }
  // return new Promise((resolve, reject) => {
  //   resolve(action)
  // }).then(res => {
  //   console.log(res)
  //   next(res)
  // })
  // return Promise.resolve(action).then(store.dispatch)
}

// const testMiddleware = store => {
//   console.log(store)
//   return function (next) {
//     return function (action) {
//       return next(action)
//     }
//   }
// }
const store = createStore(Model.reducer.save, Model.store, applyMiddleware(testMiddleware))

export default store
