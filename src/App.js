import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

function App() {
  const SERVER_URL = process.env.NODE_ENV != 'production' ? 'http://localhost:8000' : 'productionurl';
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

  const refreshAccessToken = async () => {
    const res = await axios.post(`${SERVER_URL}/requestNewAccessToken`, {}, {
      headers: {"auth-token-refresh": localStorage.getItem("refresh-token")}
    });

    if (res.status == 200 && !res.data.pokeErrCode) {
      const accessToken = res.headers['auth-token-access']
      localStorage.setItem("access-token", accessToken);
      return true;
    }
    return false;
    
  }

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
              element={isAdmin() ? <AdminDashboard SERVER_URL={SERVER_URL} refreshAccessToken={refreshAccessToken}/> : <Navigate to="/" />}
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
