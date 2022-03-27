import React from "react";
import {Form} from "react-bootstrap";



const LoginWidget = () => {
return (
    <div className={"flex flex-col items-center py-1 md:p-5 lg:mx-80 px-3 gap-3 shadow-lg " +
        "md:mx-40 mx-10 mt-5 md:mt-10"}>
        <h1 className={"font-bold text-xl lg:text-2xl text-center"}>Sign in to Your Account</h1>
        <Form className={"flex flex-col gap-1 w-full"}>
            <label className={"text-gray-400"}>Email</label>
            <input className={"border-2"}/>
            <label className={"text-gray-400"}>Password</label>
            <input className={"border-2"}/>
            <button className={"bg-indigo-700 text-amber-50 mt-2 py-2"}>Sign in</button>
        </Form>
        <div className={"flex flex-col items-center gap-3"}>
            <div className={"flex flex-row gap-1"}>
                <div className={"text-sm"}>Don't have an account ? </div>
                <a href={" "} className={"text-sm text-indigo-800 font-bold"}>Sign Up</a>
            </div>
           <a href={" "} className={"text-sm text-indigo-800 font-bold"}>Forgot Password?</a>
        </div>
    </div>
)
}

export default LoginWidget;