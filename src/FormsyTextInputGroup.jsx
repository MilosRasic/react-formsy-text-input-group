'use strict';

import React from 'react';
import {Row, Input} from 'formsy-react-components';

export default React.createClass({
    displayName: 'TextInputGroup',

    render: function() {
        const {label, rowClassName, labelClassName, elementWrapperClassName, layout, hasErrors, inputProps, ...other} = this.props;

        const inputs = inputProps.map((props, index) => <Input type="text" layout="elementOnly" key={'input'+index} {...other} {...props} value={typeof props.value != 'undefined' ? props.value : ''} />);

        return (
                <Row label={label} rowClassName={rowClassName} labelClassName={labelClassName} elementWrapperClassName={elementWrapperClassName} layout={layout} hasErrors={hasErrors}>
                    {inputs}
                </Row>
        );
    },
});