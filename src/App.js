import React from 'react';
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

function App() {
  const SERVER_URL = 'http://localhost:8000';
  const isAdmin = () => {
    const refreshToken = localStorage.getItem("refresh-token");
    if (!refreshToken) return false;

    const decoded = jwt_decode(refreshToken);
    return decoded.user.role == "admin"
  };
  
  const isAuthed = () => {
    const accessToken = localStorage.getItem("access-token");
    const refreshToken = localStorage.getItem("refresh-token");
    return accessToken && refreshToken ? true : false
  };

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={isAuthed() ? <Navigate to="/admin" /> : <Login SERVER_URL={SERVER_URL}/>}
            />
            <Route
              path="/admin"
              element={isAdmin() ? <AdminDashboard /> : <Navigate to="/" />}
            />
            <Route 
              path="/"
              element={isAuthed() ? <Home /> : <Navigate to="/login" />}
            />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
