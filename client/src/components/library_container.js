import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BookCard from'./book_card'


const Container= styled.div`
    margin: 10px;

    .addNewBookButton{
        margin-bottom: 10px;;
    }
    .libraryCards{
        display: flex;
        flex-wrap: wrap;
        row-gap: 30px;
        column-gap: 15px;
        
        }

`

function LibraryDisplay({currentUserBooks, setCurrentUserBooks}){

    const navigate= useNavigate()


        return(
            <Container>
                < div className="addNewBookButton"> 
                    <button onClick={()=>{navigate(`/add_a_new_book`)}}> Add New Book </button>
                </div>
                <div className="libraryCards">
                {currentUserBooks.map((eachBook) => ( <BookCard key={eachBook.id} 
                                                            title={eachBook.title} 
                                                            comment={eachBook.comment}
                                                            price={eachBook.price}
                                                            eachBookID={eachBook.id}
                                                            currentUserBooks={currentUserBooks}
                                                            setCurrentUserBooks={setCurrentUserBooks}
                                                            />
                                                        )
                                                        )}
                </div>
                
            </Container>
        )
}
export default LibraryDisplay