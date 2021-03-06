import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import constants from "../constants";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loading, showPasswordReset } from "../redux/reducers/homePageState";
import { useAuth } from "../contexts/AuthContext";
import { useRef } from "react";
function UpdatePassword(props) {
  const selfCloseWindow = () => {
    dispatch(showPasswordReset());
    console.log("password updated window closed");
  };

  const [UpdatePassword, setUpdatePassword] = useState(false);
  const dispatch = useDispatch();

  const handleOnUpdatePassword = (e) => {
    dispatch(showPasswordReset());
    setUpdatePassword(true);
    console.log("password updated window closed");
    updatePassword(e);
  };

  const setLoading = () => {
    dispatch(loading());
  };
  const { resetPassword } = useAuth();
  const emailRef = useRef();

  async function updatePassword(e) {
    e.preventDefault();
    try {
      setLoading();
      await resetPassword(emailRef.current.value);
      console.log("email sent", emailRef.current.value);
    } catch {}
    setLoading();
  }

  if (props.PasswordResetShowed) {
    return (
      <div
        className={
          "flex flex-col items-center py-2 " +
          "lg:mx-auto px-3 gap-3 shadow-lg rounded-lg " +
          "mx-10 mt-5 md:mx-40 md:mt-10" +
          "md: mt-auto"
        }
      >
        <div className={"flex flex-col items-end w-full"}>
          <button
            className="pt-3 pr-1 md:pr-2 lg:pr-3"
            onClick={selfCloseWindow}
          >
            <AiOutlineClose />
          </button>
        </div>

        <h1 className={"font-bold text-xl lg:text-2xl text-center"}>
          {constants.UPDATEPASSWORD.title}
        </h1>

        <div className="text-sm text-gray-400 text-center">
          {constants.UPDATEPASSWORD.prompt}
        </div>

        <Form className={"flex flex-col gap-1 w-full mb-6"}>
          <label className={"text-gray-400"}>Email</label>
          <input className={"border-2"} ref={emailRef} />
          <button
            className={"bg-indigo-700 text-amber-50 mt-2 py-2"}
            onClick={handleOnUpdatePassword}
          >
            {constants.UPDATEPASSWORD.btnName}
          </button>
        </Form>
      </div>
    );
  }

  if (UpdatePassword) {
    return <PasswordUpdated />;
  }

  console.log("password" + props.PasswordResetShowed);
  if (!props.PasswordResetShowed) {
    console.log("false error");
    return <div />;
  }
}

function PasswordUpdated() {
  return (
    <div
      className={
        "flex flex-col items-center p-10 md: pb-15 lg:pb-20 " +
        "lg:mx-auto px-3 gap-8 shadow-lg rounded-lg " +
        "mx-10 mt-5 md:mx-40 md:mt-10" +
        "md: mt-auto"
      }
    >
      <div>
        <AiOutlineMail size={50} style={{ color: "#5048E5" }} />
      </div>
      <div className="text-center">
        We have sent the update password link to your email, please check that
        ???
      </div>
    </div>
  );
}

export default UpdatePassword;
