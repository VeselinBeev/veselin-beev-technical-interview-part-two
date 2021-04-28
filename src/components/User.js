
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrent } from '../actions/userActions';
import Post from './Post';
const User = ({ user, setCurrent, post: { posts } }) => {
	const [togglePosts, setTogglePosts] = useState(false);
	const toggleClass = () => {
		setTogglePosts(!togglePosts);
	};
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
			<li>
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
			</li>
			<li>
				<strong>Phone: </strong>
				<span>{user.phone}</span>
			</li>
			<li>
				<strong>Website: </strong>
				<span>{user.website}</span>
			</li>
			<button className="btn" onClick={() => setCurrent(user)} >Select user</button>
			<button className="btn" onClick={toggleClass} >Get user’s posts</button>
			<section className={togglePosts
				? 'posts-wrapper active' : 'posts-wrapper'} >
				<h2>My Posts</h2>
				{posts.filter((post) => post.userId === user.id).map((post => <Post key={post.id} post={post} />))}
			</section>
		</ul>
	)
};


User.propTypes = {
	setCurrent: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(
	mapStateToProps,
	{ setCurrent }
)(User);
