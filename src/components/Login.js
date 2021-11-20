import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'
function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleemailchange = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    const handlepasswordchange = (event) => {
        setValues({ ...values, password: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }
    return (
        <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
                {submitted && (values.name || values.email || values.password) ? <div className="success-message">Success!</div> : null}
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
                    {submitted && !values.name ?<span style={{color:"red"}}>Please enter email</span>:null}

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
                    {submitted && !values.name ?<span style={{color:"red"}}>Please enter password</span>:null}

                </div>

                <div className="formField">
                    <button className="formFieldButton">Sign In</button>{"   "}
                    <Link to="/" className="formFieldLink">
                        Create an account
                            </Link>
                </div>
                <GoogleLogin
                clientId="1007645588939-ib526hn4olabp418np7gopph4kmitn3n.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />

            </form>
        </div>
    );
}
export default Login;