import { createStore ,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from  'redux-thunk';
import reducers from './reducers';
import INITIAL_STORE from './const';
const composeEnhancers = composeWithDevTools({
	name: "Herramienta de desarrollo Redux",
	maxAge: 5,
	actionsWhitelist: [".*"]
});
const enhancers = composeEnhancers(
	applyMiddleware(ThunkMiddleware)
	// other store enhancers if any
);

export default createStore(reducers,INITIAL_STORE,enhancers);
// export default createStore(combineReducers({
// 	car : reducerCar,
// }),INITIAL_DATA);
