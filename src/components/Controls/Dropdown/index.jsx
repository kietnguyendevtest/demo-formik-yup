import React from 'react';
import Select from 'react-select'
import TextError from '../FormikControl/TextError';

function Dropdown(props) {
    const {
        field, form,
        options, label, placeholder, disabled, required,
        ...rest
    } = props;

    const { name, value } = field;
    const { errors, touched, setFieldValue } = form;

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            <Select
                className='select-control'
                classNamePrefix="react-select"
                id={name}
                {...field}
                options={options}
                placeholder={placeholder}
                isDisabled={disabled}
                {...rest}
                value={value && value.value}
                onChange={val => setFieldValue(name, val.value)}
            />
            {(errors[name]) && <TextError>{errors[name]}</TextError>}
        </div>
    );
}

export default Dropdown;