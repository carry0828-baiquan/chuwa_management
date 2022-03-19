import React from "react";
import {Button, Form, FormGroup} from 'react-bootstrap'
import "./Login.css"
const LoginPage = () => {
  return (
    <div className={"LoginModal"}>

        <h1 className="sign-in-header">Sign in to your account</h1>
        <FormGroup className={"sign-in-email"}>
            <label className={"email-label"}>Email</label>
            <input className={"email-input"} type="email" placeholder="Email"/>

        </FormGroup>
        <FormGroup className={"sign-in-password"}>
            <label className={"password-label"}>Password</label>
            <input className={"password-input"} type={"password"} placeholder={"Password"}/>
        </FormGroup>
        <Button className={"sign-in-btn"}>sign in</Button>
        <div className={"signin-password"}>
            <span>Don't have an account?</span>


            <a href={"100"} >Sign Up</a>


            <a href={"@"} className="password-reset-link">Forget Password?</a>
        </div>




    </div>
  )
}


export default LoginPage;