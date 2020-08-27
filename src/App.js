import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    
    <div className = "app-wrapper">
    <Header />
    <Nav />
    <div   className = "app-wrapper-content">
    <Route path = "/Dialogs"  render = {() => <DialogsContainer  dispatch = {props.dispatch} store={props.store}/>} />
    <Route path = "/Profile"  render = {() => <Profile           dispatch = {props.dispatch} store={props.store}/>} />
    <Route path = "/Music"    component = {Music}   />
    <Route path = "/News"     component = {News}    />
    </div>
    </div>
  );
}




export default App;
