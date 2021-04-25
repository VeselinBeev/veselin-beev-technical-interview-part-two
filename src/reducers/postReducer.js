import { GET_POSTS, USERS_ERROR } from "./../actions/types";

const initialState = {
	posts: null,
	error: null,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
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
