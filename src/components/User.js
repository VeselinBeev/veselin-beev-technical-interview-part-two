
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrent } from '../actions/userActions';
import { getPosts } from '../actions/postActions';
import Post from './Post';
const User = ({ user, setCurrent, post: { posts }, getPosts }) => {
	useEffect(() => {
		getPosts();
		// eslint-disable-next-line
	}, []);


	return (
		<ul className={'user'}>
			<li>
				<strong>Name: </strong>
				<span>{user.name}</span>
			</li>
			<li>
				<strong>Username: </strong>
				<span>{user.username}</span>
			</li>
			<li>
				<strong>Email: </strong>
				<span>{user.email}</span>
			</li>
			{/*<li>
				<strong>Street: </strong>
				<span>{user.address.street}</span>
			</li>
			<li>
				<strong>Suite: </strong>
				<span>{user.address.suite}</span>
			</li>
			<li>
				<strong>City: </strong>
				<span>{user.address.city}</span>
			</li>*/}
			<li>
				<strong>Phone: </strong>
				<span>{user.phone}</span>
			</li>
			<li>
				<strong>Website: </strong>
				<span>{user.website}</span>
			</li>
			<button className="btn" onClick={() => setCurrent(user)} >Select user</button>
			<h2>My Posts</h2>
			<section className="posts-wrapper display-none">
				{posts.filter((post) => post.userId === user.id).map((post => <Post key={post.id} post={post} />))}
			</section>
		</ul>
	)
};


User.propTypes = {
	setCurrent: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(
	mapStateToProps,
	{ setCurrent, getPosts }
)(User);
