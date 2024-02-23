import React from 'react';
import DateView from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FastField, ErrorMessage } from 'formik';
import TextError from '../FormikControl/TextError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function DatePicker(props) {
    const {
        field, form,
        options, label, placeholder, disabled, required,
        ...rest
    } = props;

    const { name, value } = field;
    const { errors, touched, setFieldValue } = form;
    const showError = errors[name] && touched[name];

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            <div className="date-control">
                <DateView
                    showIcon
                    icon={<FontAwesomeIcon icon={faCalendarDays} />}
                    id={name}
                    {...field}
                    placeholderText='dd/MM/yyyy'
                    {...rest}
                    selected={value}
                    onChange={val => setFieldValue(name, val)}
                />
            </div>
            {showError && <TextError>{errors[name]}</TextError>}
        </div>
    );
}

export default DatePicker;