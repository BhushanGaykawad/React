import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Employee from './Employee';
import Department from './Department';

{/*const Myelement = React.createElement;
const container=React.createElement;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 container('div',{},Myelement('h1',{}, 'I do  use JSX.!!!!')) 
);*/}

{/*const Myelement = (
  <div>
    <h1>Welcome to react Programming world</h1>
    <h2>Understanding react rendering.</h2>
  </div>
)*/}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>) ;






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
