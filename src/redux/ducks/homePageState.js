const SHOWLOGINWIDGET = "showLoginWidget";
const SHOWPASSWORDRESET = "showPasswordReset";

export const showLoginWidget = () => ({
  type: SHOWLOGINWIDGET,
});

export const showPasswordReset = () => ({
  type: SHOWPASSWORDRESET,
});

export const signupError = () => (
    {
      type:"signupError"
    }
)

export const loadingSignup = () => ({
  type: "loadingSignup"
})

export const  setEmail = () => ({
  type:" setEmail"
})

const initialState = { LoginWidgetShowed: true, PasswordResetShowed: true,
signupError: "", loadingSignup: false,  setEmail:""
};

const winState = (state = initialState, action) => {
  switch (action.type) {
    case SHOWLOGINWIDGET:
      return { ...state, LoginWidgetShowed: !state.LoginWidgetShowed };
    case SHOWPASSWORDRESET:
      return { ...state, PasswordResetShowed: !state.PasswordResetShowed };
    case signupError:
      return {...state, signupError: "cant signup"}
    case loadingSignup:
      return {...state, loadingSignup: true}
    case  setEmail:
      return {...state,  setEmail: action.payload}
    default:
      return state;
  }
};

export default winState;
