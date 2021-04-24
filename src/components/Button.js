import PropTypes from "prop-types";

const Button = ({ title, onClick }) => {
	return (
		<button onClick={onClick} className="btn">
			{title}
		</button>
	);
};

Button.propTypes = {
	title: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
