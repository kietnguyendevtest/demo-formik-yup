import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../Controls/FormikControl';

function DemoForm() {
    const [result, setResult] = useState('');


    const dropDownOptions = [
        { value: '', text: '--Select--' },
        { value: 'opt1', text: 'Option 1' },
        { value: 'opt2', text: 'Option 2' },
        { value: 'opt3', text: 'Option 3' },
    ]
    const radioOptions = [
        { value: 'rdoOpt1', text: 'Radio Option 1' },
        { value: 'rdoOpt2', text: 'RadioOption 2' },
        { value: 'rdoOpt3', text: 'Radio Option 3' },
    ]
    const checkboxOptions = [
        { value: 'ckbOpt1', text: 'Checkbox Option 1' },
        { value: 'ckbOpt2', text: 'Checkbox Option 2' },
        { value: 'ckbOpt3', text: 'Checkbox Option 3' },
    ]


    const initialValues = {
        email: '',
        desc: '',
        selectOpt: '',
        radioOpt: '',
        checkboxOpt: [],
        birthDate: null,
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required!'),
        desc: Yup.string().required('Required!'),
        selectOpt: Yup.string().required('Required!'),
        radioOpt: Yup.string().required('Required!'),
        checkboxOpt: Yup.array().min(2, 'Required check 2 item!'),
        birthDate: Yup.date().nullable().required('Required!'),
    });
    const onSubmit = (values, onSubmitProps) => {
        onSubmitProps.resetForm();
        setResult(JSON.stringify(values))
    }

    return (
        <>
            <h1>Demo Formik with Yup</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => (

                        <Form>
                            <FormikControl control='input' type='email' lable='Email:' name='email' />

                            <FormikControl control='textarea' lable='Description:' name='desc' />

                            <FormikControl control='select' lable='Select a topic:' name='selectOpt' options={dropDownOptions} />

                            <FormikControl control='radio' lable='Radio topic:' name='radioOpt' options={radioOptions} />

                            <FormikControl control='checkbox' lable='Checkbox topics:' name='checkboxOpt' options={checkboxOptions} />

                            <FormikControl control='date' lable='Pick a date:' name='birthDate' />

                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            </Formik>
            {result &&
                <>
                    <br />
                    <h2>Result</h2>
                    <p>{result}</p>
                    <button type='button' onClick={() => setResult('')}>Clear result</button>
                </>
            }
        </>
    );
}

export default DemoForm;