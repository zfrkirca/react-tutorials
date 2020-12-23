import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {combineReducers, createStore} from "redux";

// reducer ilgili datayı günceller ve yenisini döner
function userReducer(state = '', action) {
    switch (action.type) {
        case 'userUpdate':
            return action.payload;
        default:
            return state;
    }
    return state;
}

function productReducer(state = [], action) {
    return state;
}

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

console.log(store.getState());

const updateUserAction = {
    type: 'userUpdate',
    payload: {
        user: 'Ahmet'
    }
}

/*
store.subscribe(() => {
    console.log('store updated: ', store.getState());
});*/

store.dispatch(updateUserAction);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
