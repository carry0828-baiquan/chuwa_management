import React from "react";
import { Form } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const LoginWidget = (props) => {
  const selfCloseWindow = () => {
    props.setLoginWidgetShowed(false);
  };
  console.log("login state " + props.LoginWidgetShowed);
  const handleForgetPassword = () => {
    props.setPasswordResetShowed(true);
  };

  return props.LoginWidgetShowed ? (
    <div
      className={
        "flex flex-col items-center py-2 lg:p-auto " +
        "lg: mx-auto px-3 gap-3 shadow-lg rounded-lg " +
        "md:mx-10 mt-5 md:mt-10" +
        "md: mt-auto"
      }
    >
      <div className={"flex flex-col items-end w-full"}>
        <button className="pt-3 pr-1 md:pr-2 lg:pr-3" onClick={selfCloseWindow}>
          <AiOutlineClose />
        </button>
      </div>

      <h1 className={"font-bold text-xl lg:text-2xl text-center"}>
        {props.title}
      </h1>
      <Form className={"flex flex-col gap-1 w-full"}>
        <label className={"text-gray-400"}>Email</label>
        <input className={"border-2"} />
        <label className={"text-gray-400"}>Password</label>
        <input className={"border-2"} />
        <button className={"bg-indigo-700 text-amber-50 mt-2 py-2"}>
          {props.btnName}
        </button>
      </Form>

      <div className={"flex flex-col lg:flex-row items-center gap-3 lg:w-full"}>
        <div className={"flex flex-row gap-1 lg:mr-auto"}>
          <div className={"text-sm"}>{props.footer}</div>
          <Link
            to={props.footerLinkPath}
            className={"text-sm text-indigo-800 font-bold"}
          >
            {props.footerLinkName}
          </Link>
        </div>
        {props.showForgetPassword ? (
          <button onClick={handleForgetPassword}>
            <Link
              to={"/UpdatePassword"}
              className={"text-sm text-indigo-800 font-bold"}
            >
              Forgot Password?
            </Link>
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  ) : (
    ""
  );
};
export default LoginWidget;
