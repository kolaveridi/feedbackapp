import React, { Component } from 'react';
import {connect} from 'react-redux';
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
         return <li><a href="">Logout</a></li>;

      }
    }
  render(){
    console.log('this.props',this.props);
      return(
        <div>
         <nav>
   <div className="nav-wrapper">
      <a href="#" className="brand-logo center">Emaily</a>
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