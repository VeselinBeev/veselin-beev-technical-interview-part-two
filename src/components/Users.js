import User from "./User";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from "../actions/userActions";

const Users = ({ user: { users, loading }, getUsers }) => {
	useEffect(() => {
		getUsers();
		// eslint-disable-next-line
	}, []);
	if (loading || users === null) {
		return <h2>Loading</h2>;
	}

	return (
		<div className="users">
			{!loading && users.length === 0 ? (<p className='center'>No Users to show...</p>) : (users.map((user) => (
				<User key={user.id} user={user} />
			)))}
		</div>
	);
};


User.propTypes = {
	user: PropTypes.object.isRequired,
	getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	user: state.user
});

export default connect(
	mapStateToProps,
	{ getUsers }
)(Users);