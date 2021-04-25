import User from "./User";

const Users = ({ users, posts }) => {
	return (
		<div className="users">
			{users.map((user) => (
				<User key={user.id} user={user} posts={posts} />
			))}
		</div>
	);
};

export default Users;
