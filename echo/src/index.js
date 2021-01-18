import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as rssParser from 'react-native-rss-parser';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function parser(){
  return fetch("https://cors-anywhere.herokuapp.com/" +'http://www.nasa.gov/rss/dyn/breaking_news.rss')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
   // console.log(rss.items);
   // console.log(rss.title);
   // console.log(rss.items.length);
    console.log(rss.image);
  });   

}


parser();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
