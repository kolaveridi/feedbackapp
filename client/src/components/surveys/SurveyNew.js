import React, { Component } from 'react';
import {connect} from 'react-redux';
import SurveyForm from './SurveyForm';
class SuveyNew extends React.Component{
    render(){
        return(
          <div>

            <SurveyForm/>
              </div>

        );
    }
}
export default SuveyNew;