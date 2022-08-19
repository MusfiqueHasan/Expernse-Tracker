import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import trackerReducer from "./reducers/tracker.reducer";


const rootReducer = combineReducers({
    trackerInfo: trackerReducer
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;