
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBody from './components/NewsBody';
import News_sp from './components/News_sp';
import News_gv from './components/News_gv';
import News_bl from './components/News_bl';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


export default class App extends Component {

  constructor(){
    super();
    this.state={
      progress:0
    }
  }
    setProgress =(progress)=>{

    this.setState({progress:progress})

  }
  
  render() {
    return (
      <Router>
      <div style={{backgroundColor:"#ddd"}}>
      <LoadingBar
        color='#f11946'
        height="3px"
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<NewsBody  setProgress={this.setProgress}/>} />
        <Route exact path="/sports" element={<News_sp setProgress={this.setProgress}/>} />
        <Route exact path="/poli" element={<News_gv setProgress={this.setProgress}/>} />
        <Route exact path="/bol" element={<News_bl setProgress={this.setProgress}/>} />
        
        </Routes>
        
      </div>
      </Router>
    )
  }
}


