import { Link, useLocation } from "react-router-dom"
import Post from "../../components/post/post.component"
import useFetchAuthorPosts from "../../hooks/useFetchAuthorPosts"

function Author() {
    const location = useLocation()
    const userId = new URLSearchParams(location.search).get("userId")

    const {data, loading, error} = useFetchAuthorPosts(userId)

    if(loading) return <>loading</>
    if(error) return <>{error}</>
  return (
    <>
        <Link to="/">Home</Link>
        <h1>Author {userId} Posts</h1>
        {data?.map(item => <Post redirect={false} key={item?.id} post={item}/>)}
    </>
  )
}

export default Author