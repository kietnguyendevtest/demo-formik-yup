import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function Dropdown(props) {
    const { lable, name, options, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{lable}</label>
            <FastField as='select' id={name} name={name} {...rest} >
                {
                    options.map((item, index) => {
                        return (
                            <option key={index} value={item.value}>
                                {item.text}
                            </option>
                        )
                    })
                }
            </FastField>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default Dropdown;