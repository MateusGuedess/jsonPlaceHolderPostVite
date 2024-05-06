import { Link, useParams } from 'react-router-dom'
import Comments from '../../components/comments/comments.component'
import Post from '../../components/post/post.component'
import useFetchPost from '../../hooks/useFetchPost'

function PostPage() {
  const {id} = useParams()
  const {data, loading, error} = useFetchPost(id)

  if(loading) return(<span>loading</span>)

  if(error) return (<span>{error}</span>)

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Post</h1>
      <Post redirect={false} post={data}/>
      <Comments postId={id}/>
    </>
  )
}

export default PostPage