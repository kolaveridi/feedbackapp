import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
         return <li><a href="/api/logout">Logout</a></li>;

      }
    }
  render(){
    console.log('this.props',this.props);
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