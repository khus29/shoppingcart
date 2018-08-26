import { connect } from "react-redux";
import Section from "../../components/sections/Section";
import * as actions from "../../actions";

function mapStateToProps(state) {
  return {
    sectionData: state.SectionReducer.sectionData,
    cartData: state.SectionReducer.cartData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchSectionData: section => dispatch(actions.fetchSectionProducts(section))
    //deleteaddToCart: (productId,price,name,imgPath,quantity) => dispatch(actions.addToCart(productId,price,name,imgPath,quantity))
  };
}
const SectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);

export default SectionContainer;
