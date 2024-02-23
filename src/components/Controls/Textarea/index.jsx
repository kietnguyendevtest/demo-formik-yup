import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function Textarea(props) {
    const {
        field, form,
        label, placeholder, disabled, required,
        ...rest
    } = props;

    const {
        name, //value, onChange, onBlur
    } = field;

    const { errors, touched } = form;

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            <textarea
                className='form-input'
                id={name}
                {...field} // <=> value, onChange, onBlur
                placeholder={placeholder}
                disabled={disabled}
                {...rest}
            />
            {(errors[name] && touched[name]) && <TextError>{errors[name]}</TextError>}
        </div>
    );
}

export default Textarea;