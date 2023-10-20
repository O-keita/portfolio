import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css"

import reportWebVitals from './reportWebVitals';
import { Header } from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Space from './Space/Space';
import Contacts from './Contacts/Contacts';
import Education from './Education/Education';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Header/>
  <Home/>
  <About/>
  <Space/>
  <Education/>
  <Space/>
  <Skills/>
  <Contacts/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
