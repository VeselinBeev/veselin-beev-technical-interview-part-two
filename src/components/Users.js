import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import User from './User';
import Post from './Post';
import EditUser from './EditUser';
import Preloader from './Preloader';
import PropTypes from 'prop-types';
import { getUsers } from '../actions/userActions';
import { getPosts } from '../actions/postActions';

const Users = ({ user: { users, loading }, getUsers, post: { posts }, getPosts }) => {
	useEffect(() => {
		getUsers();
		getPosts();
		// eslint-disable-next-line
	}, []);

	if (loading || users === null || posts === null) {
		return <Preloader />;
	}

	return (
		<main>
			<aside>
				<EditUser />

			</aside>
			<section>
				{!loading && users.length === 0 ? (<p className='center'>No Users found</p>) : (users.map(user => <User user={user} key={user.id} />))}
				<h2>My Posts</h2>
				<section className="posts-wrapper display-none">
					{posts.filter((post) => post.userId === post.id).map((post => <Post key={post.id} post={post} />))}

				</section>
			</section>
		</main>
	);
};

Users.propTypes = {
	user: PropTypes.object.isRequired,
	getUsers: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	user: state.user,
	post: state.post
});

export default connect(
	mapStateToProps,
	{ getUsers, getPosts }
)(Users);
