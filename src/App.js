import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Sign In
              </NavLink>
            <NavLink
              exact
              to="/sign-up"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Sign Up
              </NavLink>
          </div>

          <div className="formTitle">
            <NavLink
              to="/"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign In
              </NavLink>{" "}
              or{" "}
            <NavLink
              exact
              to="/sign-up"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign Up
              </NavLink>
          </div>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/sign-up" element={<Signup/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}
export default App;
