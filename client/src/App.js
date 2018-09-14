import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import *  as actions from './actions';
import Header from './components/Header';
const Dashbaord =()=><h1>Dashbaord</h1>;
const SurveyNew =()=><h1>SurveyNew</h1>;
const Landing =()=><h1>Landing</h1>;
class App extends Component {
  // instead of componentWillMount
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
        <div> 
          <Header/>
         <Route  path="/surveys/new" component={SurveyNew}/>
          <Route  exact={true} path="/surveys" component={Dashbaord}/>
          <Route  exact={true} path="/" component={Landing}/>
        
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
