import { useEffect, useState } from "react"
import useFetchPosts from "../../hooks/useFetchPosts"
import Pagination from "../pagination/pagination.component"
import Post from "../post/post.component"
import { Container } from "./posts.style"

function Posts() {
    const [pagination, setPagination] = useState<number>(0)
    const {data, loading, error} = useFetchPosts() 
    const [filtredData, setFiltredData] = useState(() => data)
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        if(!data) return
        if(!filtredData) return setFiltredData(data)
        const dataFromPage = data.slice(pagination*10, pagination*10+10)
        setFiltredData(dataFromPage.filter(item => item?.title.includes(search)))
    }, [search, data, pagination])


    if(loading) return(<span>loading</span>)

    if(error) return (<span>{error}</span>)

  return (
    <Container>
        <Pagination pages={data?.length / 10} setPagination={setPagination} pagination={pagination}/>
        <label>
            Search:
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
        </label>
        {filtredData?.map(item => <Post key={item?.id} post={item}/>)}
    </Container>
  )
}

export default Posts