import React, { Component } from 'react';
import {connect} from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
class SuveyNew extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showReview:false
        };

    }
    renderContent=()=>{
        if(this.state.showReview){
            return <SurveyFormReview 
              onCancel={()=>this.setState({showReview:false})}/>
        }
        else
        {
            return <SurveyForm
                       onSurveySubmit={()=>this.setState({showReview:true})}
                     />
        }
        
    }
    render(){
        return(
          <div>

            {this.renderContent()}
              </div>

        );
    }
}
export default SuveyNew;