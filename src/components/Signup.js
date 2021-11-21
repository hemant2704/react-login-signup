import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const handlenamechange = (event) => {
        setValues({ ...values, name: event.target.value })
    }
    const handleemailchange = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    const handlepasswordchange = (event) => {
        setValues({ ...values, password: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.name && values.email && values.password) setValid(true);
        setSubmitted(true);
    }
    return (

        <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message" style={{color:"lightgreen"}}>Success!</div> : null}
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        onChange={handlenamechange}
                        type="text"
                        id="name"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        name="name"
                        value={values.name}
                    />
                    <br/>
                    {submitted && !values.name ?<span style={{color:"red"}}>Please enter name</span>:null}
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="email">
                        E-Mail Address
                    </label>
                    <input
                        onChange={handleemailchange}
                        type="email"
                        id="email"
                        className="formFieldInput"
                        placeholder="Enter your email"
                        name="email"
                        value={values.email}
                    />
                    <br/>
                    {submitted && !values.email ?<span style={{color:"red"}}>Please enter email</span>:null}

                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="password">
                        Password
                    </label>
                    <input
                        onChange={handlepasswordchange}
                        type="password"
                        id="password"
                        className="formFieldInput"
                        placeholder="Enter your password"
                        name="password"
                        value={values.password}
                    />
                    <br/>
                    {submitted && !values.password ?<span style={{color:"red"}}>Please enter password</span>:null}

                </div>

                <div className="formField">
                    <button className="formFieldButton">Sign Up</button>{"   "}
                    <Link to="/" className="formFieldLink">
                        I'm already member
                    </Link>
                </div>
            </form>
        </div>
    );
}
export default Signup;