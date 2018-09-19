import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';
class Payments extends React.Component{
    render(){
        console.log('Inside Payment');
        //debugger;
        return(
        <div>
            <StripeCheckout
            name="Emaily"
            description="$5 for 5 email Credits"
             amount={500}
             token={token =>this.props.handleToken(token)}
             stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />

            </div>

        );
    }
}

export default connect(null,actions) (Payments);