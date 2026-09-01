import React, { useCallback, useEffect, useRef, useState, useMemo, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import './App.css';
import theme from "./theme";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/*<Route index element={<LandingPage />} />*/}
          <Route path="*" element={<div>404 — Страница не найдена</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;