import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import Home from "./components/home";
import Tournament from "./components/tournament/Tournament";
import About from "./components/about/About";
import Register from "./components/login/Register";
import Header from "./components/home/Header";
import Login from "./components/login/Login";
import Footer from "./components/home/Footer";
import Users from "./components/admin/Users";
import Profile from "./components/user/Profile";
import Terms from "./components/rules/Terms";

function App() {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
      ReactTooltip
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tournaments" element={<Tournament />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                user={user}
                setUser={setUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/admin/users" element={<Users />} />
          <Route
            path="/login/:id"
            element={
              <Profile
                user={user}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/terms&conditions" element={<Terms />} />
        </Routes>
      </div>

      <Footer />
    </Router>
    // </Provider>
  );
}

export default App;
