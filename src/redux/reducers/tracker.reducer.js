import { CREATE_TRACKER_INF0, DELETE_TRACKER_INF0, GET_SINGLE_TRACKER_INFO, GET_TRACKER_INF0, UPDATE_MODAL_STATE, UPDATE_TRACKER_STATE, UPDATE_TRACKER_INF0, SORTED_DATA } from "../type";

const initState = {
    details: [],
    singleInfo: {},
    openModel: false,
    sortType: 'asc'
};

function trackerReducer(state = initState, action) {
    switch (action.type) {
        case GET_TRACKER_INF0:
            return {
                ...state,
                details: action.payload
            };
        case GET_SINGLE_TRACKER_INFO:
        case UPDATE_TRACKER_STATE:
            return {
                ...state,
                singleInfo: action.payload
            };
        case UPDATE_MODAL_STATE:
            return {
                ...state,
                openModel: action.payload
            };
        case CREATE_TRACKER_INF0:
        case DELETE_TRACKER_INF0:
        case UPDATE_TRACKER_INF0:
        case SORTED_DATA:
            if (state.sortType === 'asc') {
                state.details.sort((a, b) => a.amount - b.amount)
                state.sortType = 'desc'
            } else {
                state.details.sort((a, b) => b.amount - a.amount)
                state.sortType = 'asc'
            }
            return {
                ...state
            };
        default:
            return state;
    }
}
export default trackerReducer;