import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import _  from 'lodash';
import validateEmails from '../../utils/validateEmails';
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
                <div>
              <Link to="/surveys" className="red btn-flat left white-text">
                Cancel
              </Link>
              </div>
               <button type="submit" className="teal btn-flat right white-text">
                Next 
               <i className="material-icons right">done</i>
               </button>
               </form>
              </div>

        );
    }
}
function validate(values){
 console.log("values",values);
 const errors={};
 if(!values.Title){
     errors.Title='You must provide a value';
 }
 if(!values.subject)
 {
     errors.subject='You must provide a subject'
 }
 if(!errors.body){
     errors.body='You must provide a body'
 }
 console.log("values.emails",values.emails);
 errors.emails=validateEmails(values.emails || '');

 console.log("errors",errors);
return errors;
}
export default  reduxForm({
    validate:validate,
    form: 'surveyForm'
}) (SuveyForm);