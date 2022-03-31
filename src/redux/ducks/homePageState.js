const SHOWLOGINWIDGET = "showLoginWidget";
const SHOWPASSWORDRESET = "showPasswordReset";

export const showLoginWidget = () => ({
  type: SHOWLOGINWIDGET,
});

export const showPasswordReset = () => ({
  type: SHOWPASSWORDRESET,
});

const initialState = { LoginWidgetShowed: true, PasswordResetShowed: true };

const winState = (state = initialState, action) => {
  switch (action.type) {
    case SHOWLOGINWIDGET:
      return { ...state, LoginWidgetShowed: !state.LoginWidgetShowed };
    case SHOWPASSWORDRESET:
      return { ...state, PasswordResetShowed: !state.PasswordResetShowed };
    default:
      return state;
  }
};
export default winState;
