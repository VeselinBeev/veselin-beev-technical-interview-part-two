import React from 'react';
import Users from './components/Users';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
	// Ако искаме да използваме това инфо в други компоненти, ще трябва да използваме Redux- който е store за сега го слага това в App.js
	// const [users] = useState([]);
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	// const getUsers = async () => {
	// 	// 	const usersFromServer = await fetchUsers();
	// 	// 	setUsers(usersFromServer);
	// 	// };
	// 	getUsers();

	// 	const getPosts = async () => {
	// 		const postsFromServer = await fetchPosts();
	// 		setPosts(postsFromServer);
	// 	};
	// 	getPosts();
	// }, []);

	// // Fetch Users
	// const fetchUsers = async () => {
	// 	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	// 	const data = await res.json();
	// 	return data;
	// };

	// // Fetch Posts
	// const fetchPosts = async () => {
	// 	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	// 	const data = await res.json();
	// 	return data;
	// };

	// // Fetch Posts by UserId
	// Fetch Users by id
	// const fetchUser = async (id) => {
	// 	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	// 	const data = await res.json()
	// 	return data
	// }

	return (
		<Provider store={store}>
			<Users />
		</Provider>
	);
};

// Users.propTypes = {
// 	user: PropTypes.object.isRequired,
// };

// mapStateToProps = (state) => ({
// 	user: state.user,
// });

// export default connect(mapStateToProps, { getUsers })(App);
export default App;
