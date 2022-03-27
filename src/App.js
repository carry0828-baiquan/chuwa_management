import LoginWidget from "./components/LoginWidget";
import TopBar from "./components/TopBar";
import BottomBar from "./components/bottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CONSTANTS from "./constants/index";
import { Route, Routes } from "react-router-dom";
import UpdatePassword from "./components/UpdatePassword";
import { useState } from "react";
function App() {
  const [LoginWidgetShowed, setLoginWidgetShowed] = useState(true);
  const [PasswordResetShowed, setPasswordResetShowed] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <TopBar
        setLoginWidgetShowed={setLoginWidgetShowed}
        LoginWidgetShowed={LoginWidgetShowed}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LoginWidget
              LoginWidgetShowed={LoginWidgetShowed}
              setLoginWidgetShowed={setLoginWidgetShowed}
              title={CONSTANTS.LOGIN_FORM_FIELDS.title}
              btnName={CONSTANTS.LOGIN_FORM_FIELDS.btnName}
              footer={CONSTANTS.LOGIN_FORM_FIELDS.footer}
              footerLinkName={CONSTANTS.LOGIN_FORM_FIELDS.footerLinkName}
              footerLinkPath={CONSTANTS.LOGIN_FORM_FIELDS.footerLinkPath}
              showForgetPassword={
                CONSTANTS.LOGIN_FORM_FIELDS.showForgetPassword
              }
            />
          }
        />
        <Route
          path="signup"
          element={
            <LoginWidget
              LoginWidgetShowed={LoginWidgetShowed}
              setLoginWidgetShowed={setLoginWidgetShowed}
              title={CONSTANTS.SIGNUP_FORM_FIELDS.title}
              btnName={CONSTANTS.SIGNUP_FORM_FIELDS.btnName}
              footer={CONSTANTS.SIGNUP_FORM_FIELDS.footer}
              footerLinkName={CONSTANTS.SIGNUP_FORM_FIELDS.footerLinkName}
              footerLinkPath={CONSTANTS.SIGNUP_FORM_FIELDS.footerLinkPath}
              showForgetPassword={
                CONSTANTS.SIGNUP_FORM_FIELDS.showForgetPassword
              }
            />
          }
        />

        <Route
          path="UpdatePassword"
          element={
            <UpdatePassword
              PasswordResetShowed={PasswordResetShowed}
              setPasswordResetShowed={setPasswordResetShowed}
            />
          }
        ></Route>
      </Routes>
      <BottomBar />
    </div>
  );
}

export default App;
