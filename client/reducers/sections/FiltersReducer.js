export default function FiltersReducer(
  state = { categoryTypes: [], selectedCategory: "" },
  action
) {
  switch (action.type) {
    case "LOAD_FILTERS":
      return {
        categoryTypes: action.categoryTypes
      };
      break;
    default:
      return state;
  }
}
