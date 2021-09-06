import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {addPost, updateNewPostText} from './redux/state'


let rerenderEntireTree = (state) => {

ReactDOM.render(
    <BrowserRouter> 
        <App state={state} addPost = {addPost} updateNewPost={updateNewPostText} />
    </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree(state) 
subscribe(rerenderEntireTree)





















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
