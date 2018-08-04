import { connect } from 'react-redux';
import Home from '../components/Home';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        homeData: state.HomeReducer.homeData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(actions.incrementCount())
    }
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
