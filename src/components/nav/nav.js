import React from "react";
import './nav.css';
import {Link} from "gatsby";

const Nav = (props) => {

  console.log(props.isMenuExpanded);
  
  return (
      <nav className={`Nav ${props.isMenuExpanded && 'expand'}`}>
        <Link activeStyle={{background: 'black'}} to="/">
          Home
        </Link>
        <Link activeStyle={{background: 'black'}} to="/projects">
          Projects
        </Link>
        <Link activeStyle={{background: 'black'}} to="/blog">
          Blog
        </Link>
        <Link activeStyle={{background: 'black'}} to="/contact">
          Contact
        </Link>
      </nav>
    )
}
 export default Nav;