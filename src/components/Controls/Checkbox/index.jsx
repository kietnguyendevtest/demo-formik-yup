import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function Checkbox(props) {
    const { lable, name, options, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{lable}</label>
            <FastField name={name} {...rest} >
                {
                    ({ field }) => {
                        return options.map((item, index) => {
                            return (
                                <div className='checkbox-control' key={index}>
                                    <input
                                        type='checkbox'
                                        id={item.value}
                                        {...field}
                                        value={item.value}
                                        checked={field.value.includes(item.value)}
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

export default Checkbox;