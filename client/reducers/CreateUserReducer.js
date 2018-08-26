export default function CreateUserReducer(
  state = { name: "", password: "", email: "" },
  action
) {
  switch (action.type) {
    case "CREATE_USER_STATUS":
      return state;
      break;
    case "SET_CREATE_NAME":
      return {
        name: action.value,
        password: state.password,
        email: state.email
      };
      break;
    case "SET_CREATE_PASSWORD":
      return {
        name: state.name,
        password: action.value,
        email: state.email
      };
      break;
    case "SET_CREATE_EMAIL":
      return {
        name: state.name,
        password: state.password,
        email: action.value
      };
    default:
      return state;
  }
}
