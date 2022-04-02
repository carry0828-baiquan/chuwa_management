import LoginWidget from "./components/LoginWidget";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CONSTANTS from "./constants/index";
import { Route, Routes } from "react-router-dom";
import UpdatePassword from "./components/UpdatePassword";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingSignup,
  showLoginWidget,
  showPasswordReset, signupError,
} from "./redux/ducks/homePageState";
import { AuthProvider } from "./contexts/AuthContext";
import { useRef} from "react";
import { useAuth } from "./contexts/AuthContext";
import {getAuth} from "firebase/auth";

function App() {
  // const [LoginWidgetShowed, setLoginWidgetShowed] = useState(true);
  // const [PasswordResetShowed, setPasswordResetShowed] = useState(true);
  const LoginWidgetShowed = useSelector(
    (state) => state.homePageState.LoginWidgetShowed
  );

  const PasswordResetShowed = useSelector(
    (state) => state.homePageState.PasswordResetShowed
  );

  const dispatch = useDispatch();
  const doShowLoginWidget = () => {
    dispatch(showLoginWidget());
  };

  const doShowPasswordReset = () => {
    dispatch(showPasswordReset());
  };

  const setLoadingSignup = () => {
    dispatch(loadingSignup());
  }
  const setSignupError = () => {
    dispatch(signupError());
  }


  const {signup} = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleOnSignupSubmit(e) {

      e.preventDefault()

      // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      //     return setError("Passwords do not match")
      // }

      try {
          // setError("")
          // setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          // history.push("/")
      } catch {
          // setError("Failed to create an account")
      }

      // setLoading(false)

  }

  return (

      <div className="flex flex-col h-screen">
        <TopBar
          setLoginWidgetShowed={doShowLoginWidget}
          LoginWidgetShowed={LoginWidgetShowed}
        />
        <Routes>
          <Route
            path="/"
            element={
              <LoginWidget
                setPasswordResetShowed={doShowPasswordReset}
                LoginWidgetShowed={LoginWidgetShowed}
                setLoginWidgetShowed={doShowLoginWidget}
                title={CONSTANTS.LOGIN_FORM_FIELDS.title}
                btnName={CONSTANTS.LOGIN_FORM_FIELDS.btnName}
                footer={CONSTANTS.LOGIN_FORM_FIELDS.footer}
                footerLinkName={CONSTANTS.LOGIN_FORM_FIELDS.footerLinkName}
                footerLinkPath={CONSTANTS.LOGIN_FORM_FIELDS.footerLinkPath}
                showForgetPassword={
                  CONSTANTS.LOGIN_FORM_FIELDS.showForgetPassword
                }
                emailRef = {emailRef}
                passwordRef = {passwordRef}
              />
            }
          />
          <Route
            path="signup"
            element={
              <LoginWidget
                LoginWidgetShowed={LoginWidgetShowed}
                setLoginWidgetShowed={doShowLoginWidget}
                title={CONSTANTS.SIGNUP_FORM_FIELDS.title}
                btnName={CONSTANTS.SIGNUP_FORM_FIELDS.btnName}
                footer={CONSTANTS.SIGNUP_FORM_FIELDS.footer}
                footerLinkName={CONSTANTS.SIGNUP_FORM_FIELDS.footerLinkName}
                footerLinkPath={CONSTANTS.SIGNUP_FORM_FIELDS.footerLinkPath}
                showForgetPassword={
                  CONSTANTS.SIGNUP_FORM_FIELDS.showForgetPassword
                }
                handleOnFormSubmit={handleOnSignupSubmit}
                emailRef = {emailRef}
                passwordRef = {passwordRef}
              />
            }
          />

          <Route
            path="UpdatePassword"
            element={
              <UpdatePassword
                PasswordResetShowed={PasswordResetShowed}
                setPasswordResetShowed={doShowPasswordReset}
              />
            }
          />
        </Routes>
        <BottomBar />
      </div>

  );
}

export default App;
