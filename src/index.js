import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";

// reducer ilgili datayı günceller ve yenisini döner
function reducer(state, action) {
    if (action.type === 'changeTheState') {
        return action.payload.newState;
    }

    return 'deneme state';
}

// createStore içine reducer vermek gerekiyor
const store = createStore(reducer);

console.log(store.getState());

const action = {
    type: 'changeTheState',
    payload: {
        newState: 'my new state'
    }
}

store.subscribe(() => {
    console.log('store updated: ', store.getState());
})

store.dispatch(action);

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
