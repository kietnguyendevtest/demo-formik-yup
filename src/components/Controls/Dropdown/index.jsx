import React from 'react';
import Select from 'react-select'
import TextError from '../TextError';

function Dropdown(props) {
    const {
        field, form,
        options, label, placeholder, disabled, required, multi,
        ...rest
    } = props;

    const { name, value: fieldValue } = field;
    const { errors, touched, setFieldValue, setFieldTouched } = form;

    const handleBlur = () => {
        setFieldTouched(name);
    };

    const onChangeSingle = (selected) => {
        setFieldValue(name, selected.value);
    };
    const onChangeMulti = (selectedArray) => {
        if (selectedArray) {
            setFieldValue(
                name,
                selectedArray.map(item => item.value),
            );
        } else {
            setFieldValue(name, []);
        }
    };

    const getValueFromSingle = () => {
        return options.find(option => option.value === fieldValue);
    };
    const getValueFromMulti = () => {
        return options.filter(option => fieldValue.includes(option.value));
    };

    const value = multi ? getValueFromMulti() : getValueFromSingle();
    const onChangeHandler = multi ? onChangeMulti : onChangeSingle;

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
                isTouched={touched[name]}
                isMulti={multi}
                {...rest}

                value={value}
                onBlur={handleBlur}
                onChange={onChangeHandler}
            />
            {(errors[name] && touched[name]) && <TextError>{errors[name]}</TextError>}
        </div>
    );
}

export default Dropdown;