import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import Select from 'react-select'
import TextError from '../FormikControl/TextError';

function Dropdown(props) {
    const { lable, name, options, ...rest } = props;

    return (
        <div className='form-control'>
            <label className='form-label' htmlFor={name}>{lable}</label>
            <FastField id={name} name={name} {...rest} >
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form;
                        const { value } = field;
                        return (
                            <Select
                                className='select-control'
                                classNamePrefix="react-select"
                                {...field}
                                {...rest}
                                options={options}
                                value={value.value}
                                onChange={val => setFieldValue(name, val.value)}
                            />
                        )
                    }
                }
            </FastField>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default Dropdown;