import Button from "./Button";
import Post from "./Post";
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from "../actions/postActions";
import { updateUser } from "../actions/userActions";

const User = ({ user, post: { posts }, getPosts }) => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [street, setStreet] = useState('');
	const [suite, setSuite] = useState('');
	const [city, setCity] = useState('');
	const [phone, setPhone] = useState('');
	const [website, setWebsite] = useState('');
	// const [tech, setTech] = useState('');

	useEffect((user) => {
		// setName(user.name);
		getPosts();
		// eslint-disable-next-line
	}, [user]);
	if (posts === null) {
		return <h2>Loading</h2>;
	}

	const onSubmit = () => {
		const updUser = {
			id: user.id,
			name,
			username,
			email,
			street,
			suite,
			city,
			phone,
			website
		};
		updateUser(updUser);

		// Clear Fields
		setName('');
		setUsername('');
		setEmail('');
		setStreet('');
		setSuite('');
		setCity('');
		setPhone('');
		setWebsite('');
	};

	const onGetUsersPosts = () => {
		// function for get user posts
	};
	return (
		<div className="user">
			<label>
				<strong>Name: </strong>
				<input type='text' name='name' value={user.name} onChange={e => setName(e.target.value)} />
			</label>
			<label>
				<strong>Username: </strong>
				<input type='text' name='name' value={user.username} onChange={e => setUsername(e.target.value)} />
			</label>
			<label>
				<strong>Email: </strong>
				<input type='text' name='name' value={user.email} onChange={e => setEmail(e.target.value)} />
			</label>
			<label>
				<strong>Street: </strong>
				<input type='text' name='name' value={user.address.street} onChange={e => setStreet(e.target.value)} />
			</label>
			<label>
				<strong>Suite: </strong>
				<input type='text' name='name' value={user.address.suite} onChange={e => setSuite(e.target.value)} />
			</label>
			<label>
				<strong>City: </strong>
				<input type='text' name='name' value={user.address.city} onChange={e => setCity(e.target.value)} />
			</label>
			<label>
				<strong>Phone: </strong>
				<input type='text' name='name' value={user.phone} onChange={e => setPhone(e.target.value)} />
			</label>
			<label>
				<strong>Website: </strong>
				<input type='text' name='name' value={user.website} onChange={e => setWebsite(e.target.value)} />
			</label>
			<Button title={"Submit"} onClick={onSubmit} />
			<Button title={"Get user’s posts"} onClick={onGetUsersPosts} />
			<hr />
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


const mapStateToProps = state => ({
	post: state.post
});

export default connect(
	mapStateToProps,
	{ getPosts, updateUser }
)(User);
