import "./App.css";
import Users from "./components/Users";
import Posts from "./components/Posts";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
function App() {
	// Ако искаме да използваме това инфо в други компоненти, ще трябва да използваме Redux- който е store за сега го слага това в App.js
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const usersFromServer = await fetchUsers();
			setUsers(usersFromServer);
		};
		getUsers();

		// const getPosts = async () => {
		// 	const postsFromServer = await fetchPosts();
		// 	setPosts(postsFromServer);
		// };
		// getPosts();
		const getPosts = async () => {
			const postsFromServer = await fetchPostsByUserId(posts.userId);
			setPosts(postsFromServer);
		};
		getPosts();
	}, []);

	// Fetch Users
	const fetchUsers = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await res.json();
		return data;
	};

	// Fetch Posts
	const fetchPosts = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		return data;
	};
	// Fetch Posts by UserId
	const fetchPostsByUserId = async (id) => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts?userId=${id}`
		);
		const data = await res.json();
		return data;
	};

	// Fetch Users by id
	// const fetchUser = async (id) => {
	// 	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	// 	const data = await res.json()
	// 	return data
	// }

	return (
		<Provider store={store}>
			<div className="App">
				<Users users={users} posts={posts} />
			</div>
		</Provider>
	);
}

export default App;
