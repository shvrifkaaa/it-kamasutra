import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [    
  {id : 1, name: 'Sharif'},
  {id : 2, name: 'Erna'},
  {id : 3, name: 'Emir'},
  {id : 4, name: 'Filipp'},
  {id : 5, name: 'Adela'},
]
let messages = [    
{id : 1, message: 'HAHA'},
{id : 2, message: 'AHAHHA'},
{id : 3, message: 'ajgkadfgkm'},
{id : 4, message: 'ksmdkfj'},
]
let posts = [    
  {id : 1, message: 'Hi, how are u ?', likescount: 12},
  {id : 2, message: 'It`s my first post', likescount: 5},
]


ReactDOM.render (<App posts={posts} dialogs={dialogs} messages={messages} /> , document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
