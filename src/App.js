import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Tournament from "./components/tournament/Tournament";
import About from "./components/about/About";
import Register from "./components/login/Register";
import Header from "./components/home/Header";
import Login from "./components/login/Login";
import Footer from "./components/home/Footer";
import Users from './components/admin/Users'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tournaments" element={<Tournament />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin/users" element={<Users/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
