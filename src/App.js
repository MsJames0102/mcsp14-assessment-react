import Posts from "./components/Posts";
import Loading from "./components/Loading";
import axios from "axios";
import {useState, useEffect} from "react";

// 
const App = () => {
    const [post, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setPosts(posts.data)
            setLoading(false)
        }
        getPosts()
    }, []);

    if(!loading){
        return <Posts posts = {post}/>
    }else{
        return <Loading />
    }
}

export default App;