import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function RadioButtons(props) {
    const {
        field, form,
        options, label, placeholder, disabled, required,
        ...rest
    } = props;

    const {
        name,
    } = field;

    const { errors, touched } = form;


    return (
        <div className='form-control form-control__radio'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            {
                options.map((item, index) => {
                    return (
                        <div className='radio-control' key={index}>
                            <input
                                type='radio'
                                id={item.value}
                                {...field}
                                {...rest}
                                value={item.value}
                                checked={field.value === item.value}
                            />
                            <label htmlFor={item.value}>{item.text}</label>
                        </div>
                    )
                })
            }
            {(errors[name]) && <TextError>{errors[name]}</TextError>}
        </div>
    );
}

export default RadioButtons;