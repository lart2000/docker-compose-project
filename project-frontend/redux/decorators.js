import { connect } from "react-redux";
export const mapToProps=(map)=>{
	return connect(map)
}

export const dispatchToProps=(dispatch)=>{
	return connect(null,dispatch)
}

