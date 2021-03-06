import React from "react";

const Post = ({ post }) => {
	return (
		<article className="post accordion">
			<button id={"accordion-" + post.id} className="accordion-toggle">
				<strong>
					User ID:<span>{post.userId}</span>
				</strong>
				<br />
				<span>Title: {post.title}</span>
			</button>
			<div className="accordion-content active" id={"accordion-" + post.id} >
				<strong>Body: </strong>
				<p>	{post.body}	</p>
			</div>
		</article>
	);
};

export default Post;
