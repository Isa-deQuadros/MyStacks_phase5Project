import styled from "styled-components"
import { useNavigate } from "react-router-dom"


import BookCard from './bookCard2'
import NewBookForm from "../add_new_book_form"

const Container = styled.div`

`

function NewLibraryDisplay(){
    const navigate= useNavigate()
    // const [Ver2CurrentBooks, setVer2CurrentBooks] = useState([])
    
    return(
        <Container>
            <button onClick={()=>{navigate(`/addNewBookv2`)}}>Add a new Book</button>
            <BookCard />

        </Container>
    )
}
export default NewLibraryDisplay