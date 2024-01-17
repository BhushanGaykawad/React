import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Department from './Department';
import Employee from './Employee';

{/*function App() {
  var myStyle={
    fontSize:100,
    color: 'red'

  }
  let i=1;
  return (
    <div className="App">
      <h1 style={myStyle}>Header In Red</h1>
      <span className='myclass'>{5 + 8}</span>
      <h1 style={{color:'red'}}> {i == 1 ? 'True!' : 'False'}</h1>
    </div>
  );
}*/}


function App() {
  

  return (
    <div>
      <Header />
      <Employee name="Vidyanidhi" salary="50000" dept="Placement" head="Pooja" />
    </div>
  );
}

export default App;
