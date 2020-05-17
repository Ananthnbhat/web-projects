import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';
//this class handles (shows) SurveyForm and SurveyReview
class SurveyNew extends React.Component {

    state = { showFormReview: false };

    renderContent = () => {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />
        }
        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);