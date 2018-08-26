import { connect } from "react-redux";
import Filters from "../../components/sections/Filters";
import * as actions from "../../actions";

function mapStateToProps(state) {
  return {
    categoryTypes: state.FiltersReducer.categoryTypes,
    selectedCategory: state.FiltersReducer.selectedCategory,
    isChecked: state.FiltersReducer.selectedCategory
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchCategoryTypes: section =>
      dispatch(actions.fetchCategoryTypes(section)),
    handleFilterAction: event =>
      dispatch(actions.handleFilterAction(event.target.value, ownProps.section))
  };
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;
