import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: "Hey there!", likesCounter: "12"},
  { id: 2, message: "My new message", likesCounter: "15"},
  { id: 3, message: "My new message", likesCounter: "14"},
  { id: 4, message: "My new message", likesCounter: "11"},
  { id: 5, message: "My new message", likesCounter: "17"}
]

let dialogs = [
  { id: 1, name: "Joe" },
  { id: 2, name: "Chuck" },
  { id: 3, name: "Bill" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Nick" }
]

let messages = [
  { id: 1, message: "Hey there!" },
  { id: 2, message: "Let's do it!" },
  { id: 3, message: "We can achieve it!" },
  { id: 4, message: "Something went wrong?" },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
