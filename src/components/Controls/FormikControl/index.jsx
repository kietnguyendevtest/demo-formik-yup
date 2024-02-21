import React from 'react';
import TextBox from '../TextBox';
import Textarea from '../Textarea';
import Dropdown from '../Dropdown';
import RadioButtons from '../RadioButtons';
import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';

function FormikControl(props) {
    const { control, ...rest } = props;
    switch (control) {
        case 'input': return <TextBox {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Dropdown {...rest} />
        case 'radio': return <RadioButtons {...rest} />
        case 'checkbox': return <Checkbox {...rest} />
        case 'date': return <DatePicker {...rest} />

        default: return null
    }
}

export default FormikControl;