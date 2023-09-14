import React from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Header from "./views/Header";
import ProtectedAlreadyConnectedRoute from "./classes/ProtectedAlreadyConnectedRoute";
import TestView from "./views/TestView";
import Profile from "./views/user/Profile";
import Tickets from "./views/user/Tickets";
import ProtectedAuthRoute from "./classes/ProtectedAuthRoute";
import Nav from "./views/user/Nav";
import Password from "./views/user/Password";

const exclusionArray = [
  '/login',
  '/register',
]

function App() {
  const location = useLocation();
  return (
    <div className="h-screen flex flex-col">
      {exclusionArray.indexOf(location.pathname) < 0 && <Header/>}
      <div className="flex flex-1 overflow-y-auto">
        <Routes>
          <Route path="" >
            <Route index element={<Home />} />
            <Route path="test" element={<TestView />} />
            <Route
                path="login"
                element={
                  <ProtectedAlreadyConnectedRoute>
                    <Login />
                  </ProtectedAlreadyConnectedRoute>
                }
            />
            <Route
                path="register"
                element={
                  <ProtectedAlreadyConnectedRoute>
                    <Register />
                  </ProtectedAlreadyConnectedRoute>
                }
            />
            <Route
              path="user"
              element={
                  <ProtectedAuthRoute>
                      <Nav />
                  </ProtectedAuthRoute>
              }
            >
                <Route path="profile" element={<Profile />}/>
                <Route path="change-password" element={<Password />}/>
                <Route path="tickets" element={<Tickets />}/>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
