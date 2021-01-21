import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


const increment =()=>{
    return {
        type : 'INCREMENT'
}
}
const decrement =()=>{
    return {
        type : 'DECREMENT'
}
}
const storeReducer=(state="Sri", action)=>{
    switch(action.type)
    {
        case 'INCREMENT':
            return state+"Shyamala";
            break;
        case 'DECREMENT':
            return state+"Gugan";
            break;
        default:
            return state;
            break;
    }
}

let store= createStore(storeReducer);
store.subscribe(()=>{console.log("Store output is"+store.getState())})
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root')
);



// If you want to start measuring performance in` your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
