import React from "react";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./sass/style.scss";
import "./sass/animations.scss";
import LoginForm from './components/login/Login';
import AddForm from "./components/add-users/AddForm";
import UserList from "./components/list-users/UserList";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [name, setName] = useState<string>("Usuario");
  const [logged, setLogged] = useState<boolean>(false);
  
  function loginUser(user:string) {
    setName(user);
  }

  function gratingUser(isGaranted: boolean) {
    setLogged(isGaranted);
  }

  return (
    <Router>
      <div className="container-fluid p-0">
        <NavBar name={name} isLogged={logged}/>
        <Routes>
          <Route path="/" element={ <LoginForm loginUser={loginUser} gratingUser={gratingUser}/>}/>
          <Route path="/home" element={ <Home name={name} isLogged={logged}/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/add-user" element={<AddForm name={name} isLogged={logged}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
