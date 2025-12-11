import React, { useCallback, useEffect, useRef, useState, useMemo, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import './App.css';
import theme from "./theme";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/*<Route index element={<HomePage />} />*/}
          <Route path="*" element={<div>404 — Страница не найдена</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;