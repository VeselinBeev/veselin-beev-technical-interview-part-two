// import PropTypes from "prop-types";
import Button from "./Button";
import Post from "./Post";

const User = ({ user, posts }) => {
	const onGetUsersPosts = () => {
		// function for get user posts
		console.log("click" + user.id);
	};
	// const filterById = posts
	// .filter((post) => post.userId === user.id)
	// .map((post) => <Post key={post.userId} post={post} />);
	return (
		<div className="user">
			<ul>
				<li>{user.id}</li>
				<li>{user.name}</li>
				<li>{user.username}</li>
				<li>{user.email}</li>
				<li>{user.address.street}</li>
				<li>{user.address.suite}</li>
				<li>{user.address.city}</li>
				<li>{user.phone}</li>
				<li>{user.website}</li>
			</ul>
			<Button title={"Get user’s posts"} onClick={onGetUsersPosts} />
			<h2>My Posts</h2>
			<section className="posts-wrapper display-none">
				{posts
					.filter((post) => post.userId === user.id)
					.map((post) => (
						<Post key={post.id} post={post} />
					))}
			</section>
		</div>
	);
};

export default User;
