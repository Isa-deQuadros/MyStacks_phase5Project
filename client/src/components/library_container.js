import styled from "styled-components";
import { Link } from "react-router-dom";
import BookCard from'./book_card'


const Container= styled.div`

`

function LibraryDisplay({userBookInformation}){

    
    return(
        <Container>
            <Link to="/add_a_new_book"> Add New Book </Link>
            {/* <BookCard userBookInformation={userBookInformation}  also has to be mapped /> */}
        </Container>
    )
}
export default LibraryDisplay