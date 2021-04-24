import React from "react";
import Button from "./Button";

const Post = ({ post }) => {
	return (
		<div className="post">
			<ul>
				<li>
					<h2>Title</h2>
					{post.title}
				</li>
				<li>
					<h2>Body</h2>
					{post.body}
				</li>
			</ul>
			<Button title={"Delete Post"} />
		</div>
	);
};

export default Post;
