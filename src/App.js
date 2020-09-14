import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer'
import Music from './components/Music/Music';
import News from './components/News/News';
import Login from './components/Login/Login';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className = "app-wrapper">
    <HeaderContainer />
    <Nav />
    <div   className = "app-wrapper-content">
    <Route path = "/Dialogs"  render = {() => <DialogsContainer />} />
    <Route path = "/Profile/:userId?"  render = {() => <ProfileContainer />} />
    <Route path = "/Users"    render = {() => <UsersContainer  />} />
    <Route path = "/Music"    component = {Music}   />
    <Route path = "/News"     component = {News}    />
    <Route path = "/Login"    render = {() => <Login />}   />
    </div>
    </div>
  );
}




export default App;
