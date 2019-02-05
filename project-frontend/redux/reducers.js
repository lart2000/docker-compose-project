import { combineReducers } from "redux";
// import  INITIAL_STORE from "./const";
// import { ADD_CAR, REMOVE_CAR}from "./const";
import INITIAL_STORE, {type} from "./const";

let reducerCar= (prevState = INITIAL_STORE.car, action)=>{
	switch (action.type) {
		case type.ADD_CAR:
			return 	prevState.filter(el=>el&&el.id!=action.product.id).concat(action.product)
		case type.REMOVE_CAR:
			return prevState.filter(el=>(el&&el.id!=action.product.id))
		default:
			return prevState;
	}
}

let reducerList= (prevState = INITIAL_STORE.list, action)=>{
	
	switch (action.type) {
		case type.ADD_ITEM:
			return 	prevState.filter(el=>el&&el.id!=action.item.id).concat(action.item)
		case type.UPDATE_ITEM:
			return prevState.map(el=>(el.id===action.id?action.item:el))
		case type.DELETE_ITEM:
			return prevState.filter(el=>(el&&el.id!=action.item.id))
		default:
			return prevState;
	}
}


export default combineReducers({
	car : reducerCar,
	list : reducerList
})