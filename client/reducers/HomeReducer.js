
export default function HomeReducer(
    state = { homeData: []}, 
    action) {
    const count = state.homeData;
    switch(action.type) {
        case 'increment':
            return {
                count: Number(count)+1
            }
        case 'decrement':
            return {
                count: Number(count)-1
            }
        default: 
            return state;
    }
}
