import Post from "./Post";
const Posts = ({ posts }) => {
	return (
		<div className="posts">
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
};

export default Posts;
