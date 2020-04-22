import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from './Payments';

class Header extends Component {

    renderContent() {

        switch (this.props.auth) {
            case null: return;      //due to slow internet or when the content is still loading we dont want show anything in this place
            case false: return (
                <li>
                    <a href="/auth/google">Login with Google</a>
                </li>
            );
            default: return [
                <li key="1"><Payments /></li>,
                <li key="2"><a href="/api/logout">Logout</a></li>
            ];
        }

    }
    render() {
        // console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? "/surveys" : "/"}
                        className="left brand-logo">
                        User Feedback
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    };
}
// function mapStateToProps(state) {
//     return {auth: state.auth}
// }
function mapStateToProps({ auth }) {    //destructuring using {}
    return { auth }
}

//without destructuring
// function mapStateToProps(state) {
//     return { auth: state.auth };
// }
export default connect(mapStateToProps)(Header);