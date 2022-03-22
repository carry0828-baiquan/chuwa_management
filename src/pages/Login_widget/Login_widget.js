import React from "react";
import {Button, Form, FormGroup} from 'react-bootstrap'
// import "./Login_widget.css"
const Login_widget = () => {


  return (
    <div className={"LoginModal"}>
        <h1 className="sign-in-header">Sign in to your account</h1>
        <form className={"login-form"}>
            <div className={"sign-in-email"}>
                <label className={"email-label"}>Email</label>
                <input className={"email-input"} type="email" placeholder="Email"/>
            </div>
            <div className={"sign-in-password"}>
                <label className={"password-label"}>Password</label>
                <input className={"password-input"} type={"password"} placeholder={"Password"}/>
            </div>
            <Button className={"sign-in-btn"}>Sign In</Button>
        </form>
        <div className={"sign-in-reminder"}>

                <tspan className={"sign-up-prompt"}>Don't have an account?</tspan>
                <a href={"100"} className={"signin-signup"}>Sign Up</a>

            <a href={"@"} className="password-reset-link">Forget Password?</a>
        </div>

    </div>
  )
}

export default Login_widget;