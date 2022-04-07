import LoginWidget from "./components/LoginWidget";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CONSTANTS from "./constants/index";
import { Route, Routes, useNavigate } from "react-router-dom";
import RequireRoute from "./components/PrivateRoute";
import UpdatePassword from "./components/UpdatePassword";
import { useSelector, useDispatch } from "react-redux";
import {
  showLoginWidget,
  showPasswordReset,
} from "./redux/reducers/homePageState";
import { useRef, useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import ProductMainPage from "./components/ProductMainPage";
import AddProduct from "./components/AddProduct";
import ProductDetail from "./components/ProductDetail";
import CartDetail from "./components/CartDetail";
import EditProduct from "./components/EditProduct";
function App() {
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
  const cartDetailShowing = useSelector((state) => state.cartShowing.showCart);

  console.log(cartDetailShowing, "cartdetailshowing");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const { signin } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleOnSignupSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
    setLoading(false);
  }

  async function handleOnSigninSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/");
      console.log("signed in");
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/invalid-email") {
        alert("The email address is badly formatted.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
    setLoading(false);
  }



    return (
    <div className="flex flex-col h-screen bg-#E5E5E5">
      <TopBar
        setLoginWidgetShowed={doShowLoginWidget}
        LoginWidgetShowed={LoginWidgetShowed}

      />
      <CartDetail showing={cartDetailShowing} className={"relative"} />
      <Routes>
        <Route
          path="/"
          element={
            <RequireRoute>
              <ProductMainPage />
            </RequireRoute>
          }
        />
        <Route
          path="/AddProduct"
          element={
            <RequireRoute>
              <AddProduct />
            </RequireRoute>
          }
        />
        <Route
            path="/EditProduct"
            element={
              <RequireRoute>
                <EditProduct />
              </RequireRoute>
            }
        />
        <Route
          path="/productDetail"
          element={
            <RequireRoute>
              <ProductDetail />
            </RequireRoute>
          }
        />
        <Route
          path="login"
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
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleOnFormSubmit={handleOnSigninSubmit}
              btnDisableState={loading}
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
              emailRef={emailRef}
              passwordRef={passwordRef}
              btnDisableState={loading}
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
