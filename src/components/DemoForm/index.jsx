import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../Controls/FormikControl';

function DemoForm() {
    const [result, setResult] = useState('');


    const dropDownOptions = [
        { value: '', label: '--Select--' },
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
        { value: 'opt3', label: 'Option 3' },
    ]
    const radioOptions = [
        { value: 'rdoOpt1', text: 'Radio Option 1' },
        { value: 'rdoOpt2', text: 'Radio Option 2' },
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
        email: Yup.string().email('Invalid email format').required('Email Required!'),
        desc: Yup.string().required('Description Required!'),
        selectOpt: Yup.string().required('Select a topic Required!'),
        radioOpt: Yup.string().required('Radio topic Required!'),
        checkboxOpt: Yup.array().min(2, 'Checkbox topics Required check 2 item!'),
        birthDate: Yup.date().nullable().required('Pick a date Required!'),
    });
    const onSubmit = (values, onSubmitProps) => {
        console.log('submit values: ', values);
        onSubmitProps.resetForm();
        setResult(JSON.stringify(values))
    }

    return (
        <div className='container'>
            <div className="row ">
                <div className="col-6 offset-3 col-lg-12 offset-lg-0">
                    <div className='demo-form'>
                        <h1>Demo Formik with Yup</h1>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {
                                formik => {
                                    return (
                                        <Form autoComplete='off'>
                                            <FormikControl control='input' type='email' lable='Email:' name='email' />

                                            <FormikControl control='textarea' lable='Description:' name='desc' />

                                            <FormikControl control='select' lable='Select a topic:' name='selectOpt' options={dropDownOptions} />

                                            <FormikControl control='radio' lable='Radio topic:' name='radioOpt' options={radioOptions} />

                                            <FormikControl control='checkbox' lable='Checkbox topics:' name='checkboxOpt' options={checkboxOptions} />

                                            <FormikControl control='date' lable='Pick a date:' name='birthDate' />

                                            <button
                                                type='submit'
                                            //disabled={!formik.isValid}
                                            >
                                                Submit
                                            </button>

                                            {/* {formik.values.selectOpt === "opt2" ? "show something" : ""} */}
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                        {result &&
                            <div className='result'>
                                <br />
                                <h2>Result</h2>
                                <p>{result}</p>
                                <button type='button' onClick={() => setResult('')}>Clear result</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DemoForm;