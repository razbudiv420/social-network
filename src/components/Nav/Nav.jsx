import React from 'react';
import n from'./Navbar.module.css'
import {NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <nav className={n.nav}>
    <div>
      <NavLink to =  "/Profile" className={n.item} activeClassName={n.active}>Profile</NavLink>
      </div>
    <div>
      <NavLink to =  "/Dialogs"  className={n.item} activeClassName={n.active}>Messages</NavLink>
      </div>
      <div>
      <NavLink to = "/Music"  className={n.item} activeClassName={n.active}>Music</NavLink>
      </div>
      <div>
      <NavLink to = "/News"  className={n.item} activeClassName={n.active}>News</NavLink>
      </div>
    </nav>
    );
}

export default Nav;