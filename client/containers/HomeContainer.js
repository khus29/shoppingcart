import { connect } from "react-redux";
import Home from "../components/Home";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    homeData: state.HomeReducer.homeData
  };
}
const HomeContainer = connect(
  mapStateToProps,
  {}
)(Home);

export default HomeContainer;
