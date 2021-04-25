import { GET_USERS, SET_LOADING, USERS_ERROR, GET_POSTS, UPDATE_USER } from "./types";

// Get users form the server
export const getUsers = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await res.json();
		dispatch({
			type: GET_USERS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USERS_ERROR,
			payload: error.response.data,
		});
	}
};

// Update User on server
export const updateUser = user => async dispatch => {
	try {

		const res = await fetch(`https://jsonplaceholder.typicode.com/users${user.id}`, {
			method: 'PUT',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();

		dispatch({
			type: UPDATE_USER,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: USERS_ERROR,
			payload: error.response.data
		});
	}
};


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
