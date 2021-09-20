import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>User-feedback landing page</h2>
            Collect feedback from users
            <blockquote>Note: for testing purposes, please use default stripe credit card details</blockquote>
            <p>Any mail id is fine</p>
            <p>Card number: 4242 4242 4242 4242</p>
            <p>Any 3 digit CVC</p>
            <p>Any future data</p>
        </div>
    );
}
export default Landing;
