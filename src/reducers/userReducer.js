import { GET_USERS, SET_LOADING, USERS_ERROR, UPDATE_USER } from "./../actions/types";

const initialState = {
	users: null,
	loading: false,
	error: null,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case UPDATE_USER:
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.payload.id ? action.payload : user
				)
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case USERS_ERROR:
			console.log(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
