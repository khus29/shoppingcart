import * as actions from '../../actions';

export default function SectionReducer(
    state = { sectionData: [], cartData: [] }, 
    action) {
    switch(action.type) {
        case "LOAD_SECTION_PRODUCTS":
            return {
                sectionData: action.sectionData,
                cartData: action.cartData
            }
            break;
        default: 
            return state;
    }
}
