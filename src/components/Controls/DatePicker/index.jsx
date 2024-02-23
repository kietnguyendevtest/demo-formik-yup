import React from 'react';
import DateView from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';

function DatePicker(props) {
    const { lable, name, ...rest } = props;

    return (
        <div className='form-control'>
            <label className='form-label' htmlFor={name}>{lable}</label>
            <FastField name={name} {...rest} >
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form;
                        const { value } = field;

                        return (
                            <div className="date-control">
                                <DateView
                                    id={name}
                                    {...field}
                                    {...rest}
                                    selected={value}
                                    onChange={val => setFieldValue(name, val)}
                                />
                            </div>
                        )
                    }
                }
            </FastField>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default DatePicker;