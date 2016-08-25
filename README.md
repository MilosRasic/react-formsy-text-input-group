# react-formsy-text-input-group
Formsy component based on [formsy-react-components](https://github.com/twisty/formsy-react-components) allowing grouping multiple text inputs under a single label.

## Purpose and usage
The component is intended to be used with react-formsy forms.

It uses react-formsy-components and wraps multiple Input elements from this module within a single Row element, effectively giving the inputs a common label. Since any of the inputs may or may not be required, required prop is not set for the Row element, which means the common label will never have a * denoting a required field.

The component takes the same props as react-formsy-components Input except type and required as default props for all the inputs in the group. Number of inputs and individual props are provided as inputProps prop which is expected in the form of an array of objects, each object representing props of one input.

An empty input props object will render an Input component with default props, but in practice you will need at least a unique name to have your Input function properly within a formsy-react Form component.

To install, simply:
```
npm install --save react-formsy-text-input-group
```


### Example
```javascript
import TextInputGroup from 'react-formsy-text-input-group';

const inputProps = [
    {name: "first_name", placeholder: "Enter contact person first name", required: true},
    {name: "last_name", placeholder: "Enter contact person last name", required: true},
    {name: "middle_name", placeholder: "Enter contact person first name (optional)"},
];

const form = (
    <Form className="form-inline" onValidSubmit={(data) => {console.log('submitted', data)}}>
        <TextInputGroup label="Contact person" layout="vertical" inputProps={inputProps} />
        <button type="submit" className="btn btn-default">Submit</button>
    </Form>
);
```