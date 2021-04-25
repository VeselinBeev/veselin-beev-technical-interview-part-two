// import User from "./User";
import Button from "./Button";
import Posts from "./Posts";

const Users = ({ users, posts, onFetchPosts }) => {
	return (
		<div className="users">
			{users.map((user) => (
				// <User  user={user} />
				<ul key={user.id}>
					<li>{user.name}</li>
					<li>{user.username}</li>
					<li>{user.email}</li>
					<li>{user.address.street}</li>
					<li>{user.address.suite}</li>
					<li>{user.address.city}</li>
					<li>{user.phone}</li>
					<li>{user.website}</li>
					<Button title={"Get user’s posts"} onClick={onFetchPosts} />
					<Posts posts={posts} />
				</ul>
			))}
		</div>
	);
};

export default Users;
