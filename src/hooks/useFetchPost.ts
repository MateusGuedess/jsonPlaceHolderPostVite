import { useEffect, useState } from 'react'
import api from '../api'

function useFetchPost(post: string | undefined) {
    const [data, setData] = useState<{userId: number, id: number, title: string, body: string} | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {

        const fetchDataForPost = async () => {
            try {
                const response =  await api.get(`/posts/${post}`)
                if(response.status !== 200) throw new Error(`HTTP error: Status ${response.status}`)
                const postData = await response.data
                setData(postData)
                setError(null)
                
            }
            catch(err) {
                if(err instanceof Error){
                    console.error(err.message)
                    setError(err.message)
                    setData(null)
                }
            }
            finally {
                setLoading(false)
            }
        }
        fetchDataForPost()
    },[])


  return {data, loading, error}
}

export default useFetchPost