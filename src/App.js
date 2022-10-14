import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Header from "./components/Header";
import List from "./components/List";
import Add from "./components/Add";
import Edit from "./components/Edit";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
