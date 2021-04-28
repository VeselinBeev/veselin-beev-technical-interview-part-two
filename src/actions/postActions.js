import { SET_LOADING, GET_POSTS, USERS_ERROR } from "./types";

// Get posts form the server
export const getPosts = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		dispatch({
			type: GET_POSTS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USERS_ERROR,
			payload: error.response.data,
		});
	}
};


// SET loaging to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
