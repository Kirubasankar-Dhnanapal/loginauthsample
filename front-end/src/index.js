
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routers from './Routers/Routers.js';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import Reducers from './Reducers.js'

const store = createStore(Reducers);

ReactDOM.render(<Provider store={store}><Routers/></Provider>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
