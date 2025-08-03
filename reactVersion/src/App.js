import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './styles/styles.css';
import Home from "./components/Home"
import ItemDetails from './components/ItemDetails'

function App() {

  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/projects/:id" component={ItemDetails}></Route>
    </BrowserRouter>
  );
}

export default App;
