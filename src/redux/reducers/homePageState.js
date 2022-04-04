const SHOWLOGINWIDGET = "showLoginWidget";
const SHOWPASSWORDRESET = "showPasswordReset";

export const showLoginWidget = () => ({
  type: SHOWLOGINWIDGET,
});

export const showPasswordReset = () => ({
  type: SHOWPASSWORDRESET,
});

export const error = (string) => ({
  type: "error",
  payload: string,
});

export const loading = () => ({
  type: "loading",
});

export const setEmail = () => ({
  type: " setEmail",
});

const initialState = {
  LoginWidgetShowed: true,
  PasswordResetShowed: true,
  error: "",
  loading: false,
  setEmail: "",
};

const winState = (state = initialState, action) => {
  switch (action.type) {
    case SHOWLOGINWIDGET:
      return { ...state, LoginWidgetShowed: !state.LoginWidgetShowed };
    case SHOWPASSWORDRESET:
      return { ...state, PasswordResetShowed: !state.PasswordResetShowed };
    case error:
      return { ...state, error: action.payload };
    case loading:
      return { ...state, loading: !loading };
    case setEmail:
      return { ...state, setEmail: action.payload };
    default:
      return state;
  }
};

export default winState;
