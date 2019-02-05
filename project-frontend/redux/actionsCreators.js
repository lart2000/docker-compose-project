import { type } from "./const";

export const delete_item = (item)=>{

	return {
		type : type.DELETE_ITEM,
		item  : item
	}
}

export const update_item = (item)=>{

	return {
		type : type.UPDATE_ITEM,
		item   : item
	}
}
export const add_item = (item)=>{
	
	return {
		type : type.ADD_ITEM,
		item   : item
	}
}