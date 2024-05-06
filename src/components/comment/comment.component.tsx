import { useNavigate } from "react-router-dom"
import { Container } from "../post/post.style"

interface IComment {
    postId?: number
    name: string
    id: number
    email: string
    body: string
}

function Comment({name, id, email, body}:IComment) {
    const navigate = useNavigate()
  return (
    <Container >
        <div className="comment__profilePic" onClick={(e) => {
            e.stopPropagation()
            navigate(`/author?userId=${id}`)
            return
        }}>
            <img alt={name} src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" width="50px" />
        </div>
        <div className="comment__content">
            <span className="name">#{id} - {name} - {email}</span>
            <div className="body">{body}</div>
            <div className="icons"></div>
        </div> 
    </Container>
  )
}

export default Comment