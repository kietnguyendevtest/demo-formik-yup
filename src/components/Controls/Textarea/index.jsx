import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function Textarea(props) {
    const { lable, name, ...rest } = props;

    return (
        <div className='form-control'>
            <label className='form-label' htmlFor={name}>{lable}</label>
            <FastField className='form-input' as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default Textarea;