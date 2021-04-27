import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../actions/userActions';
const EditUser = ({ current, updateUser }) => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [street, setAddressStreet] = useState('');
	const [suite, setAddressSuite] = useState('');
	const [city, setAddressCity] = useState('');
	const [phone, setPhone] = useState('');
	const [website, setWebsite] = useState('');

	useEffect(() => {
		if (current) {
			setName(current.name);
			setUsername(current.username);
			setEmail(current.email);
			setAddressStreet(current.address.street);
			setAddressSuite(current.address.suite);
			setAddressCity(current.address.city);
			setPhone(current.phone);
			setWebsite(current.website);
		}
	}, [current]);

	const onSubmit = () => {

		const updUser = {
			id: current.id,
			name,
			username,
			email,
			address: {
				street: street,
				suite: suite,
				city: city
			},
			phone,
			website
		};

		updateUser(updUser);

		// Clear Fields after update 
		setName('');
		setUsername('');
		setEmail('');
		setAddressCity('');
		setAddressStreet('');
		setAddressSuite('');
		setPhone('');
		setWebsite('');

	};

	return (
		<>
			<div className="user">
				<h2>Selected user to populate data</h2>
				<label>
					<strong>Name: </strong>
					<input
						type='text'
						name='name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>
				<label>
					<strong>Username: </strong>
					<input type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} />
				</label>
				<label>
					<strong>Email: </strong>
					<input type='text' name='email' value={email} onChange={e => setEmail(e.target.value)} />
				</label>
				<label>
					<strong>Street: </strong>
					<input type='text' name='street' value={street} onChange={e => setAddressStreet(e.target.value)} />
				</label>
				<label>
					<strong>Suite: </strong>
					<input type='text' name='suite' value={suite} onChange={e => setAddressSuite(e.target.value)} />
				</label>
				<label>
					<strong>City: </strong>
					<input type='text' name='city' value={city} onChange={e => setAddressCity(e.target.value)} />
				</label>
				<label>
					<strong>Phone: </strong>
					<input type='text' name='phone' value={phone} onChange={e => setPhone(e.target.value)} />
				</label>
				<label>
					<strong>Website: </strong>
					<input type='text' name='website' value={website} onChange={e => setWebsite(e.target.value)} />
				</label>
				<button className={'btn'} onClick={onSubmit} >Update selected user</button>

			</div>
		</>
	);
};

EditUser.propTypes = {
	current: PropTypes.object,
	updateUser: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
	current: state.user.current,
});

export default connect(
	mapStateToProps,
	{ updateUser }
)(React.memo(EditUser));
