import React, { Component } from 'react';
// insted of props.input ,we ddid {input}
//{touched & error } means if touched and there is an error
export default ({input,label,meta:{error,touched}})=>{
    console.log("props",input);
    console.log("meta-error",error);
    return (
      <div>
          <label>
              {label}
          </label>
             <input {...input} style={{marginBottom:'5px'}}/>
             <div className="red-text" style={{marginBottom:'20px'}}>
           {touched && error}
           </div>
        </div>


    );
}