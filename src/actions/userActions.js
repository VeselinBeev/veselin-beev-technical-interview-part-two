import {
	SET_LOADING,
	SET_CURRENT,
	CLEAR_CURRENT,
	GET_USERS,
	USERS_ERROR,
	UPDATE_USER
} from './types';


// Get Users from server
export const getUsers = () => async dispatch => {
	try {
		setLoading();

		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();

		dispatch({
			type: GET_USERS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: USERS_ERROR,
			payload: err.response.statusText
		});
	}
};


// Update User on server
export const updateUser = user => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
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
	} catch (err) {
		dispatch({
			type: USERS_ERROR,
			payload: err.response.statusText
		});
	}
};

// Set current user
export const setCurrent = user => {
	return {
		type: SET_CURRENT,
		payload: user
	};
};

// Clear current user
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
