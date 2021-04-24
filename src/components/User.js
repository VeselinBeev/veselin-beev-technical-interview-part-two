import PropTypes from 'prop-types'
import Button from './Button'
import Posts from './Posts'

const User = (props) => {
	const onClick = () => {
		console.log("click");
	};
	return (
		<section>
			<h2>{props.title}</h2>
			<ul>
				<li>{props.name}</li>
				<li>{props.username}</li>
				<li>{props.email}</li>
				<li>{props.address.street}</li>
				<li>{props.address.suite}</li>
				<li>{props.address.city}</li>
				<li>{props.phone}</li>
				<li>{props.website}</li>
			</ul>
			<Button title={'Get user’s posts'} onClick={onClick} />
			<Posts posts={props.posts} />
		</section>

	)
}

User.defaultProps = {
	title: 'Default User Title',
	name: 'Sara Smith',
	email: 'testmeil@mail.com',
	username: 'My Username',
	address: {
		street: 'street',
		suite: '12',
		city: 'paris'
	},
	phone: '+ 359 111 222 333',
	website: 'http://google.com',
}

User.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	email: PropTypes.string,
	username: PropTypes.string,
	address: PropTypes.object,
	phone: PropTypes.string,
	website: PropTypes.string,
	posts: PropTypes.object,
}

export default User
