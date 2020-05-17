import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";

import Header from "./Header";
// const Dashboard = () => <h2>Dashboard</h2>
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
// const SurveyNew = () => <h2>SurveyNew</h2>

//class component
class App extends React.Component {

    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container"> 
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" component={Landing} exact></Route>
                        <Route path="/surveys" component={Dashboard} exact></Route>
                        <Route path="/surveys/new" component={SurveyNew}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null, actions)(App);