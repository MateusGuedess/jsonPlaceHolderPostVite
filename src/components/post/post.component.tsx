import { useNavigate } from "react-router-dom"
import { Container } from "./post.style"

interface IPost  {
    post: {
        userId: number, 
        id: number, 
        title: string, 
        body: string
    } |  null
    redirect?: boolean
}

function Post({post, redirect=true}: IPost) {
    const navigate = useNavigate()
    if(!post) return
    const handleRedirectToPost = () => {
        navigate(`post/${post.id}`)
    }
  return (
    <Container redirect={redirect} onClick={() => redirect && handleRedirectToPost()}>
        <div className="post__profilePic" onClick={(e) => {
            e.stopPropagation()
            navigate(`/author?userId=${post.userId}`)
            return
        }}>
            <img alt={post.title} src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" width="50px" />
        </div>
        <div className="post__content">
            <span className="title">{post.title}</span>
            <div className="body">{post.body}</div>
            <div className="icons"></div>
        </div>  
    </Container>
  )
}

export default Post