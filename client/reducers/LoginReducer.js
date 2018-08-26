export default function LoginReducer(
  state = { redirectToReferrer: false, name: "", password: "" },
  action
) {
  switch (action.type) {
    case "DO_LOGIN":
      return {
        redirectToReferrer: !state.redirectToReferrer
      };
      break;
    case "SET_NAME":
      return {
        redirectToReferrer: state.redirectToReferrer,
        name: action.value,
        password: state.password
      };
      break;
    case "SET_PASSWORD":
      return {
        redirectToReferrer: state.redirectToReferrer,
        name: state.name,
        password: action.value
      };
    default:
      return state;
  }
}
