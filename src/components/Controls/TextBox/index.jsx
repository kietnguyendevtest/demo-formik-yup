import React, { useState } from 'react';
import TextError from '../TextError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextBox(props) {
    const {
        field, form,
        type, label, placeholder, disabled, required,
        leftIcon, rightIcon, eyeIcon,
        ...rest
    } = props;

    const [isShowHidePass, setIsShowHidePass] = useState(false);

    const {
        name, //value, onChange, onBlur
    } = field;

    const { errors, touched } = form;

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            <div className='textbox-control'>
                <input
                    className='form-input'
                    id={name}
                    {...field} // <=> value, onChange, onBlur
                    type={eyeIcon ? (isShowHidePass ? "text" : "password") : type}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...rest}
                />
                {leftIcon && <span className="icon-left">{leftIcon}</span>}
                {rightIcon && <span className="icon-right">{rightIcon}</span>}
                {
                    eyeIcon && <span className="icon-eye" onClick={() => setIsShowHidePass(!isShowHidePass)}>
                        {isShowHidePass ? <FontAwesomeIcon icon="fa-solid fa-eye" /> : <FontAwesomeIcon icon="fa-solid fa-eye-slash" />}
                    </span>
                }
            </div>
            <TextError>{(errors[name] && touched[name]) && errors[name]}</TextError>
        </div>
    );
}

export default TextBox;