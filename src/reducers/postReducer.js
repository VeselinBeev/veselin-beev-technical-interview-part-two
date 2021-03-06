import { GET_POSTS, USERS_ERROR, GET_POSTS_BY_ID } from "./../actions/types";

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
		case GET_POSTS_BY_ID:
			// TODO get post by userid  use( useSelector )
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
