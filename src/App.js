
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBody from './components/NewsBody';
import News_sp from './components/News_sp';
import News_gv from './components/News_gv';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<NewsBody/>} />
        <Route exact path="/sports" element={<News_sp/>} />
        <Route exact path="/poli" element={<News_gv/>} />
        </Routes>
        
      </div>
      </Router>
    )
  }
}


