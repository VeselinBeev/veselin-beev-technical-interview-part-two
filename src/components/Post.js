import React from "react";

const Post = ({ post }) => {
	return (
		<div className="post">
			<ul>
				<li>
					<h2>
						User Id: <span>{post.userId}</span>
					</h2>
				</li>
				<li>
					<h2>Title</h2>
					{post.title}
				</li>
				<li>
					<h2>Body</h2>
					{post.body}
				</li>
			</ul>
		</div>
	);
};

export default Post;
