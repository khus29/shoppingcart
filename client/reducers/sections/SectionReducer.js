import * as actions from "../../actions";

export default function SectionReducer(
  state = { sectionData: [], cartData: [] },
  action
) {
  switch (action.type) {
    case "LOAD_SECTION_PRODUCTS":
      return {
        sectionData: action.sectionData,
        cartData: action.cartData
      };
      break;
    case "HANDLE_FILTER_ACTION":
      return state;
    default:
      return state;
  }
}
