import React from "react";
import {Button, Form, FormGroup} from 'react-bootstrap'
import "./Signin.css"
const LoginPage = () => {
  return (
    <div className={"LoginModal"}>
        <h1 className="sign-in-header">Sign in to your account</h1>
        <label className={"email-label"}>Email</label>
        <input className={"email-input"} type="email" placeholder="Email"/>
        <label className={"password-label"}>Password</label>
        <input className={"password-input"} type={"password"} placeholder={"Password"}/>
        <Button className={"sign-in-btn"}>Sign In</Button>
        <tspan className={"sign-up-prompt"}>Don't have an account?</tspan>
        <a href={"100"} className={"signin-signup"}>Sign Up</a>
        <a href={"@"} className="password-reset-link">Forget Password?</a>
    </div>
  )
}


export default LoginPage;