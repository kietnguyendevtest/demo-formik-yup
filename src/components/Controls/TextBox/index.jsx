import React from 'react';
import TextError from '../FormikControl/TextError';

function TextBox(props) {
    const {
        field, form,
        type, label, placeholder, disabled, required,
        ...rest
    } = props;

    const {
        name, //value, onChange, onBlur
    } = field;

    const { errors, touched } = form;

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            <input
                className='form-input'
                id={name}
                {...field} // <=> value, onChange, onBlur
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                {...rest}
            />
            {(errors[name] && touched[name]) && <TextError>{errors[name]}</TextError>}
        </div>
    );
}

export default TextBox;