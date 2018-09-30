import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _  from 'lodash';
  class SurveyFormReview extends React.Component{
    render(){
        return(
         <div>
          <h5>Please Enter your entries </h5>
          <button
           className="yellow darken-3 btn-flat"
           onClick={this.props.onCancel}
          >
          Back
          </button>
         </div>

        );
    }
}

function mapStateToProps(state){
    console.log(state.form.surveyForm.values);//all values filled in form
 return{
   formValues:state.form.surveyForm.values
 };
}
export default connect(mapStateToProps)(SurveyFormReview);