import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className = "app-wrapper">
    <Header />
    <Nav />
    <div   className = "app-wrapper-content">
  <Route path = "/Dialogs"  render = {() => <Dialogs state = {props.state}/>} />
  <Route path = "/Profile"  render = {() => <Profile state = {props.state} addPost = {props.addPost} updatePostText = {props.updatePostText}/>} />
    <Route path = "/Music"    component = {Music}   />
    <Route path = "/News"     component = {News}    />
    </div>
    </div>
    </BrowserRouter>
  );
}




export default App;
