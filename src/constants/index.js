const LOGIN_FORM_FIELDS = {
  title: "Sign in to your account",
  btnName: "Sign in",
  footer: "Don't have an account",
  footerLinkName: "Sign up",
  showForgetPassword: true,
  footerLinkPath: "/signup",
};

const SIGNUP_FORM_FIELDS = {
  title: "Sign up an account",
  btnName: "Sign up",
  footer: "Already have an account",
  footerLinkName: "Sign in",
  showForgetPassword: false,
  footerLinkPath: "/",
};

const UPDATEPASSWORD = {
  title: "Update your password",
  prompt: "Enter your email link, we will send you the recovery link",
  btnName: "Update Password",
};

const constants = { LOGIN_FORM_FIELDS, SIGNUP_FORM_FIELDS, UPDATEPASSWORD };
export default constants;
