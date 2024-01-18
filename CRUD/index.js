import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ContactUs from './ContactUs';
import ListOfProduct from './ListOfProduct';
import NoPage from './NoPage';
import ListEmployee from './ListEmployee';
import CreateEmp from './CreateEmp'
import Employee from './Employee';
import EmployeeUpdate from './EmployeeUpdate';
import Employeedel from './Employeedel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
    <Route path="/" element={<Home />}/>
    <Route path="Home" element={<Home />} />
    <Route path="Contactus" element={<ContactUs />} />
    <Route path="ListOfProduct" element={<ListOfProduct />} />
    <Route path="ListEmployee" element={<ListEmployee />} />
    <Route path="Create" element={<CreateEmp/>}/>
    <Route path="emp/:id" element={< Employee />}/>
    <Route path="empup/:id" element={<EmployeeUpdate />}/>
    <Route path="*" element={<NoPage />} />
    <Route path="empdel/:id" element={< Employeedel />}/>
    </Route>
  </Routes>
</BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
