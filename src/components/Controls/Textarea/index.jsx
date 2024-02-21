import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function Textarea(props) {
    const { lable, name, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{lable}</label>
            <FastField as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default Textarea;