import {
	GET_USERS,
	SET_LOADING,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_USER,
	USERS_ERROR
} from '../actions/types';

const initialState = {
	users: null,
	current: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case UPDATE_USER:
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.payload.id ? action.payload : user
				)
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case USERS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
