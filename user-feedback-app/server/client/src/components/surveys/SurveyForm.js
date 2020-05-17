import _ from 'lodash';
import React from 'react';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
//this class shows the form

class SurveyForm extends React.Component {
    renderFields() {
        // <div>
        //     <Field type="text" name="title" component={SurveyField} label="Survey Titile" />
        //     <Field type="text" name="subject" component={SurveyField} label="Subject Line" />
        //     <Field type="text" name="body" component={SurveyField} label="Email Body" />
        //     <Field type="text" name="emails" component={SurveyField} label="Recipient List" />
        // </div>;
        return _.map(formFields, ({ label, name }) => { //iterate over FIELD and for every object in there, run the below return one time
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next
                    <i className="material-icons right">done</i>
                    </button>
                </form>
            </div >
        );
    }
}

const validator = values => {// whatever user provides as input in the form, are made as an object 
    //and injected into the validate function as values by redux form
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });
    return errors; //if errors has any formFields inside it, it means there is some validation error associated with that field
}
export default reduxForm({
    validate: validator,
    form: 'surveyForm',
    destroyOnUnmount: false // dont delete the form inputs if redux form is unmounted
})(SurveyForm);

//reduxForm from redux-form is very similar to connect() method of react-redux