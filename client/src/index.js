
import   'materialize-css/dist/css/materialize.min.css'
//import M from 'materialize-css/dist/js/materialize.min.js'
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
const store=createStore(reducers,{},applyMiddleware(reduxThunk))

ReactDOM.render(
<Provider store ={store}>
<App/></Provider>, 
document.getElementById('root'));
registerServiceWorker();
