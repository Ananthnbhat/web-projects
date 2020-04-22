import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="User feedback"
                description="$5 for 5 email credits"
                amount={500}//5 dollars in US currency
                token={token => this.props.handleStripeToken(token)} //token received back from Stripe as callback
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}
export default connect(null, actions)(Payments);