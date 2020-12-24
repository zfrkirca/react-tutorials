import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

// birden fazla reducer'ı birleştirmek için kullanılır
const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer
})

// createStore içine reducer vermek gerekiyor
// İkinci parametrede default değer verilebilir
const store = createStore(rootReducer, {
        products: [{
            name: 'Samsung',
            type: 'TV'
        }],
        user: 'Zafer'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// redux'ın store'u kullanabilmesi için provider ile sarmalanması gerekiyor
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
