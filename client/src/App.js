import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
const Header =()=><h1>Header</h1>;
const Dashbaord =()=><h1>Dashbaord</h1>;
const SurveyNew =()=><h1>SurveyNew</h1>;
const Landing =()=><h1>Landing</h1>;
class App extends Component {
  render() {
    return (
      <div className="App">
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

export default App;
