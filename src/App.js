import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Agenda from "./pages/Agenda";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <br/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/calendar" component={Calendar}></Route>
        <Route path="/agenda" component={Agenda}></Route>
      </div>
    </Router>
  );
}

export default App;
