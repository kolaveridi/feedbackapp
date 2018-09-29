import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import SurveyField from './SurveyField';
import _  from 'lodash';
const FIELDS=[
 {label:'Survey Title',name:'Title'},
 {label:'Subject Line',name:'subject'},
 {label:'Email body',name:'body'},
 {label:'Recipient List',name:'emails'}
];
class SuveyForm extends React.Component{
    renderFields(){
         return _.map(FIELDS,field=>{
             return <Field 
                    component={SurveyField}
                    type="text"
                    label={field.label}
                    name={field.name}

                    />
                  
                  
         })
        
        // return(
        //     <div>
        //       <Field
        //        label="Survey Title"
        //         type="text"
        //         name="surveyTitle"
        //         component={SurveyField}
        //        /> 
        //         <Field
        //        label="Subject Line"
        //         type="text"
        //         name="subject"
        //         component={SurveyField}
        //        /> 
        //         <Field
        //        label="Email Body"
        //         type="text"
        //         name="body"
        //         component={SurveyField}
        //        /> 
        //         <Field
        //        label="Recipient List"
        //         type="text"
        //         name="emails"
        //         component={SurveyField}
        //        /> 

        //         </div>
        // );
    }
    render(){
        return(
          <div>
              <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
               
                {this.renderFields()}
              
               <button type="submit">Submit </button>
               </form>
              </div>

        );
    }
}
export default  reduxForm({
    form: 'surveyForm'
}) (SuveyForm);