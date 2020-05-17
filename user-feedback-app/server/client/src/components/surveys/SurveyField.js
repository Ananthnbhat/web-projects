//SurveyField contains logic to render a single lable and text
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => { //props.input is destructured to {input}. props is provided by redux form which contains some usefule
    //method in-built, like onBlur, onChange, onDrop, onFocus etc. label is a prop from parent component
    // console.log(meta);
    // console.log(input);
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}} />
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
}