
import PostsItem from './PostsItem'


const Posts = ({posts}) => {
 return posts.map((post) => (
    <PostsItem key={post.id} post={post}/>
 ))
    

}

export default Posts;