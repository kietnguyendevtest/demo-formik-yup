import React from 'react';
import TextError from '../TextError';

function Textarea(props) {
    const {
        field, form,
        label, placeholder, disabled, required,
        ...rest
    } = props;

    const { name } = field;

    const { errors, touched } = form;

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            <div className="textarea-control">
                <textarea
                    className='form-input'
                    id={name}
                    {...field}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...rest}
                />
            </div>
            <TextError>{(errors[name] && touched[name]) && errors[name]}</TextError>
        </div>
    );
}

export default Textarea;