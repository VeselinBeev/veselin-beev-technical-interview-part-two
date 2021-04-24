import User from "./User";

const Users = ({ users }) => {
	return (
		<div className="users">
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
};

export default Users;
