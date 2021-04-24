// import PropTypes from "prop-types";
import Button from "./Button";
import Posts from "./Posts";

const User = ({ user }) => {
	const onClick = () => {
		console.log("click" + user.id);
	};
	return (
		<div className="user">
			<ul>
				<li>{user.name}</li>
				<li>{user.username}</li>
				<li>{user.email}</li>
				<li>{user.address.street}</li>
				<li>{user.address.suite}</li>
				<li>{user.address.city}</li>
				<li>{user.phone}</li>
				<li>{user.website}</li>
			</ul>
			<Button title={"Get user’s posts"} onClick={onClick} />
		</div>
	);
};

export default User;
