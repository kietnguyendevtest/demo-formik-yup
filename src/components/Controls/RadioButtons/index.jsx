import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function RadioButtons(props) {
    const { lable, name, options, ...rest } = props;

    return (
        <div className='form-control form-control__radio'>
            <label className='form-label' htmlFor={name}>{lable}</label>
            <FastField name={name} {...rest} >
                {
                    ({ field }) => {
                        return options.map((item, index) => {
                            return (
                                <div className='radio-control' key={index}>
                                    <input
                                        type='radio'
                                        id={item.value}
                                        {...field}
                                        value={item.value}
                                        checked={field.value === item.value}
                                    />
                                    <label htmlFor={item.value}>{item.text}</label>
                                </div>
                            )
                        })
                    }
                }
            </FastField>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default RadioButtons;