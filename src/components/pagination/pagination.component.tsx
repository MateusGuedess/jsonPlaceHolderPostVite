import { Container } from "./pagination.style"

interface IPagination {
    pages: number | undefined
    setPagination: React.Dispatch<React.SetStateAction<number>>
    pagination: number
}

function Pagination({pages,pagination, setPagination}: IPagination) {

  return (
    <Container>
        <button disabled={pagination == 0} onClick={() => setPagination(prevState => prevState - 1)}>{"<"}</button>
        <div>
            {[...Array(pages)].map((_, index) => <span className={pagination == index ? "collored" : ""} key={index}>{index + 1}</span>)}
        </div>
        <button onClick={() => setPagination(prevState => prevState + 1)}>{">"}</button>
    </Container>
  )
}

export default Pagination