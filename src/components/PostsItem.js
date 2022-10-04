


const PostsItem = ({post}) => {
    const handleClick = (e) => {
        console.log(e.target.id)
    }

        return (<div>
                <h1 onClick={handleClick} id={post.id}>{post.title}</h1>
                <p>{post.body}</p>
        </div>
        )
}

export default PostsItem;