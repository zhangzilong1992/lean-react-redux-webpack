import React from 'react';
import ReactDOM from 'react-dom';
import IndexRouter from './router/index.js'
import {Provider} from 'react-redux'
import store from './redux/store.js'

import './global.css'

ReactDOM.render(<Provider store={store}>
  <IndexRouter/>
</Provider>, document.getElementById('root'));
