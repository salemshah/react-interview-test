import React from 'react';
import ReactDOM from 'react-dom';

// ----------- redux -----------
import {createStore} from "redux"
import {Provider} from "react-redux"
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension"
// ----------- style -----------
import 'antd/dist/antd.css';
import './App.css';
import './index.css';

//---------- component ---------
import App from './App';
import reportWebVitals from './reportWebVitals';

// ---------- configuration redux -----
const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
 <Provider store={store}>
         <App />
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
