import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';
class Header extends React.Component{
  renderContent (){
    switch(this.props.auth){
      case null:
           return 'Still Deciding';

       case false:
          return (
            <li> <a href="/auth/google">Login With Google</a></li>
          );
           
       
       default:
       return (
         <div>
        <li key1="1">Credits:{this.props.auth.credits}</li>
        <li><a href="/api/logout">Logout</a></li>
        </div>
       );
       

    }
  }
  render(){
    console.log('this.props',this.props);
    let authvalue=this.props.auth;
    console.log('authvalue',authvalue);
      return(
        <div>
         <nav>
   <div className="nav-wrapper">
      <Link 
         to= {this.props.auth?'/surveys':'/'} 
         className="brand-logo center">
      Emaily</Link>
      <ul className="right">
       {this.renderContent()}
      
      </ul>
    </div>
  </nav>
    {authvalue===false || authvalue===null?null:<Payments/>}
        </div>
      );
  }

}
function mapStateToProps(state){
  return{
    auth:state.auth
  }
}

export default connect(mapStateToProps) (Header);