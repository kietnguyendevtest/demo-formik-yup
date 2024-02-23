import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function Checkbox(props) {
    const {
        field, form,
        options, label, placeholder, disabled, required,
        ...rest
    } = props;

    const {
        name, value
    } = field;

    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div className='form-control form-control__checkbox'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            {
                options.map((item, index) => {
                    return (
                        <div className='checkbox-control' key={index}>
                            <input
                                type='checkbox'
                                id={item.value}
                                {...field}
                                value={item.value}
                                checked={value.includes(item.value)}
                                {...rest}
                            />
                            <label htmlFor={item.value}>{item.text}</label>
                        </div>
                    )
                })
            }
            {errors[name] && <TextError>{errors[name]}</TextError>}
        </div>
    );
}

export default Checkbox;