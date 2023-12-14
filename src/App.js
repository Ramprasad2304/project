import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./login";
import { Register } from "./Register";
import Aaa from './assests/Ram.png';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <img src={Aaa} />
      </div>   
  );
}

export default App;