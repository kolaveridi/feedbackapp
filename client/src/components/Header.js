import React, { Component } from 'react';

class Header extends React.Component{

  render(){
      return(
        <div>
         <nav>
   <div className="nav-wrapper">
      <a href="#" className="brand-logo center">Emaily</a>
      <ul className="right">
        <li><a href="sass.html">Login With Google</a></li>
      </ul>
    </div>
  </nav>
        </div>
      );
  }

}

export default Header;