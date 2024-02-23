import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../Controls/FormikControl';
import Button from '../Controls/Button';
import TextBox from '../Controls/TextBox';
import Dropdown from '../Controls/Dropdown';
import DatePicker from '../Controls/DatePicker';
import RadioButtons from '../Controls/RadioButtons';
import Checkbox from '../Controls/Checkbox';
import Textarea from '../Controls/Textarea';

function DemoForm() {
    const [result, setResult] = useState('');

    const dropDownOptions = [
        { value: '', label: '--Select--' },
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
        { value: 'opt3', label: 'Option 3' },
        { value: 'opt4', label: 'Option 4' },
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
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email Required!'),
        desc: Yup.string().required('Description Required!'),
        selectOpt: Yup.string().required('Select a topic Required!'),
        radioOpt: Yup.string().required('Radio topic Required!'),
        checkboxOpt: Yup.array().min(2, 'Checkbox topics Required check 2 item!'),
        birthDate: Yup.date().nullable().required('Pick a date Required!'),
    });
    const onSubmit = (values, onSubmitProps) => {
        onSubmitProps.resetForm();
        setResult(JSON.stringify(values))
    }

    return (
        <div className='container'>
            <div className="row ">
                <div className="col-6 offset-3 col-lg-12 offset-lg-0">
                    <div className='demo-form'>
                        <h1>Demo Formik with Yup</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {formikProps => {
                                const { values, errors, touched } = formikProps;

                                console.log({ values, errors, touched });

                                return (
                                    <Form autoComplete='off'>
                                        <FastField
                                            name='email'
                                            component={TextBox}
                                            label="Email"
                                            required
                                            type="email"
                                        />

                                        <FastField
                                            name='desc'
                                            component={Textarea}
                                            label="Description"
                                            required
                                        />

                                        {/* <FormikControl control='select' lable='Select a topic:' name='selectOpt' options={dropDownOptions} /> */}
                                        <FastField
                                            name='selectOpt'
                                            component={Dropdown}
                                            label='Select a topic:'
                                            required
                                            options={dropDownOptions}
                                        />

                                        {/* <FormikControl control='radio' lable='Radio topic:' name='radioOpt' options={radioOptions} /> */}
                                        <FastField
                                            name='radioOpt'
                                            component={RadioButtons}
                                            label='Radio topic:'
                                            required
                                            options={radioOptions}
                                        />

                                        {/* <FormikControl control='checkbox' lable='Checkbox topics:' name='checkboxOpt' options={checkboxOptions} /> */}
                                        <FastField
                                            name='checkboxOpt'
                                            component={Checkbox}
                                            label='Checkbox topics:'
                                            required
                                            options={checkboxOptions}
                                        />

                                        {/* <FormikControl control='date' lable='Pick a date:' name='birthDate' /> */}
                                        <FastField
                                            name='birthDate'
                                            component={DatePicker}
                                            label='Pick a date:'
                                            required
                                        />

                                        <Button
                                            variant="contained"
                                            type='submit'
                                            disabled={!formikProps.isValid}
                                            leftIcon={<FontAwesomeIcon icon="fa-solid fa-circle-check" />}
                                        >
                                            Submit
                                        </Button>

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