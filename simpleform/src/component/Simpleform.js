import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveForm } from '../store/actions/FormActions';
import Validator from 'validatorjs';
import { reduxForm } from 'redux-form';
import Map from './Map'


const Simpleform = () => {
    const dispatch = useDispatch();
    const abc = useSelector((state) => state.FormReducer);
    const first_name = useRef();
    const middle_name = useRef();
    const last_name = useRef();
    const phonenumber = useRef();
    const dob = useRef();
    const time = useRef();
    const email = useRef();
    const weight = useRef();
    const height = useRef();
    const zipcode = useRef();



    const [errors, setErrors] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            first_name: first_name.current.value,
            middle_name: middle_name.current.value,
            last_name: last_name.current.value,
            phonenumber: phonenumber.current.value,
            dob: dob.current.value,
            time: time.current.value,
            email: email.current.value,
            height: height.current.value,
            weight: weight.current.value,
            zipcode: zipcode.current.value,




        }




        let rules = {
            first_name: 'required|alpha',
            middle_name: 'required|alpha',
            last_name: 'required|alpha',
            phonenumber: 'required|numeric|digits:10',
            dob: 'required|date|before_or_equal:today',
            email: 'required|email',
            time: 'required',
            height: 'required|numeric',
            weight: 'required|numeric',
            zipcode: 'required|numeric|digits:6',


        }
        let validator = new Validator(data, rules);
        if (validator.fails()) {
            setErrors(validator.errors);
        }
        else if (validator.passes()) {
            console.log('data call action', data)

        }
        dispatch(saveForm(data));
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <p>
                    First Name <span style={{ color: '#f00' }}>*</span>
                </p>
                <p>
                    <input type="text" ref={first_name} />
                    {errors !== null && errors.get('first_name') !== undefined && errors.get('first_name').map((err, i) => (
                        <span className="error_message" key={'first_name_err_' + i}>{err}</span>
                    ))}
                </p>
                <p>
                    Middle Name <span style={{ color: '#f00' }}>*</span>
                </p>
                <p>
                    <input type="text" ref={middle_name} />
                    {errors !== null && errors.get('middle_name') !== undefined && errors.get('middle_name').map((err, i) => (
                        <span className="error_message" key={'middle_name_err_' + i}>{err}</span>
                    ))}
                </p>
                <p>
                    Last  Name <span style={{ color: '#f00' }}>*</span>
                </p>
                <p>
                    <input type="text" ref={last_name} />
                    {errors !== null && errors.get('last_name') !== undefined && errors.get('last_name').map((err, i) => (
                        <span className="error_message" key={'last_name_err_' + i}>{err}</span>
                    ))}
                </p>
                <p>Phone Number <span style={{ color: '#f00' }}>*</span></p>
                <p>
                    <input type="text" ref={phonenumber} />
                    {errors !== null && errors.get('phonenumber') !== undefined && errors.get('phonenumber').map((err, i) => (
                        <span className="error_message" key={'phonenumber_err_' + i}>{err}</span>
                    ))}
                </p>

                <p>DOB <span style={{ color: '#f00' }}>*</span></p>
                <p>
                    <input type="date" ref={dob} />
                    {errors !== null && errors.get('dob') !== undefined && errors.get('dob').map((err, i) => (
                        <span className="error_message" key={'date_err_' + i}>{err}</span>
                    ))}
                </p>
                <p>Time of Birth <span style={{ color: '#f00' }}>*</span></p>
                <p>
                    <input type="time" ref={time} />
                    {errors !== null && errors.get('time') !== undefined && errors.get('time').map((err, i) => (
                        < span className="error_message" key={'time_err_' + i} > {err}</span>
                    ))}
                </p>
                <p>
                    Email <span style={{ color: '#f00' }}>*</span>
                </p>
                <p>
                    <input type="text" ref={email} />
                    {errors !== null && errors.get('email') !== undefined && errors.get('email').map((err, i) => (
                        <span className="error_message" key={'email_err_' + i}>{err}</span>
                    ))}
                </p>
                <p>
                    Height <span style={{ color: '#f00' }}>*</span>
                </p>
                <p>
                    <input type="text" ref={height} />
                    {errors !== null && errors.get('height') !== undefined && errors.get('height').map((err, i) => (
                        <span className="error_message" key={'height_err_' + i}>{err}</span>
                    ))}
                </p>
                <p>
                    Weight <span style={{ color: '#f00' }}>*</span>
                </p>

                <p>
                    <input type="text" ref={weight} />
                    {errors !== null && errors.get('weight') !== undefined && errors.get('weight').map((err, i) => (
                        <span className="error_message" key={'weight_err_' + i}>{err}</span>
                    ))}
                </p>
                <p>
                    Zipcode <span style={{ color: '#f00' }}>*</span>
                </p>
                <p>
                    <input type="text" ref={zipcode} />
                    {errors !== null && errors.get('zipcode') !== undefined && errors.get('zipcode').map((err, i) => (
                        <span className="error_message" key={'zipcode_err_' + i}>{err}</span>
                    ))}
                </p>

                <p>
                    <Map />
                </p>
                <p>
                    <button type="submit"> Submit</button>
                </p>

            </form>
            {/* <h3>Display In same Form/Functional Component</h3>
            <p> First_Name : {abc.first_name}</p>
            <p> Middle_Name : {abc.middle_name}</p>
            <p> Last_Name : {abc.last_name} </p>
            <p> Email : {abc.email} </p> */}
        </>
    );
}
export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(Simpleform);
