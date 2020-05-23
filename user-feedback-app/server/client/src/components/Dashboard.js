import React from 'react';
import SurveyList from './surveys/SurveyList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}
export default Dashboard;