import styled from "styled-components";
import { Link } from "react-router-dom";
import BookCard from'./book_card'


const Container= styled.div`

`

function LibraryDisplay({currentUserBooks}){
    console.log("These Books", currentUserBooks)

    
    return(
        <Container>
            <Link to="/add_a_new_book"> Add New Book </Link>
            {currentUserBooks.map(() => { <BookCard currentUserBookInfo={currentUserBooks}/>
            })}
        </Container>
    )
}
export default LibraryDisplay