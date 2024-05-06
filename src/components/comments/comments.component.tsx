import { useEffect, useState } from 'react'
import api from '../../api'
import useFetchComments from '../../hooks/useFetchComments'
import Comment from '../comment/comment.component'
import { Container } from './comments.style'

interface IComments {
    postId: string | undefined
}

function Comments({postId}: IComments) {
    const {data, loading, error} = useFetchComments(postId)
    const [textArea, setTextArea] =  useState("")
    const [name, setName] =  useState("")
    const [email, setEmail] =  useState("")

    const [comments, setComments] = useState(data)

    useEffect(() => {
        setComments(data)
    }, [data])


   const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const commentInfo = {
        body: textArea, 
        email: email, 
        id: 1234567, 
        name: name, 
        postId: 12312312,
    }

    setComments(prevState => prevState && [...prevState,commentInfo ])

    api.post("/comments", commentInfo)
   }
  
   return (
    <Container>
        <h2>Comments</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Email: 
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Body:
                <textarea onChange={(e) => setTextArea(e.target.value)} value={textArea} />
            </label>
            <button type='submit'>Comment!</button>
        </form>
        {comments?.map(item => <Comment name={item?.name} id={item?.id} email={item?.email} body={item?.body} key={item.id}/>)}
    </Container>
  )
}

export default Comments