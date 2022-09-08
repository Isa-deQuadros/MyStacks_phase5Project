import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BookCard from'./book_card'


const Container= styled.div`

`

function LibraryDisplay({currentUserBooks}){
    console.log("This Users Library", currentUserBooks)

    const navigate= useNavigate()


        return(
            <Container>
                <button onClick={()=>{navigate(`/add_a_new_book`)}}> Add New Book </button>
                {currentUserBooks.map((eachBook) => ( <BookCard key={eachBook.id} 
                                                            title={eachBook.title} 
                                                            comment={eachBook.comment}
                                                            price={eachBook.price}
                                                            currentUserBooks={currentUserBooks}
                                                            />
                                                        )
                                                        )}
            </Container>
        )
}
export default LibraryDisplay