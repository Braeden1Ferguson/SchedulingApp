
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import WeekView from './pages/WeekView';
import AccountPage from './pages/AccountPage';


//functions


const App = () => {
  return (
    <div className="mt-5">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/week-view" element={<WeekView />}/>
          <Route exact path="/account" element={<AccountPage />}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
