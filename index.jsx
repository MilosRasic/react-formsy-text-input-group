import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import TextInputGroup from './src/FormsyTextInputGroup';

const inputProps = [
	{name: "first_name", placeholder: "Enter contact person first name", required: true},
	{name: "last_name", placeholder: "Enter contact person last name", required: true},
	{name: "middle_name", placeholder: "Enter contact person first name (optional)"},
];

ReactDOM.render(
	<Form className="form-inline" onValidSubmit={(data) => {console.log('submitted', data)}}>
		<TextInputGroup label="Contact person" layout="vertical" inputProps={inputProps} />
		<button type="submit" className="btn btn-default">Submit</button>
	</Form>,
    document.getElementById('demo')
);