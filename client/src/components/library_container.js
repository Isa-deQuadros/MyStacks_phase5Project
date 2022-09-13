import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BookCard from'./book_card'


const Container= styled.div`
    margin-top: 10px;
    margin-right: 3px;
    margin-left: 3px;
    margin-bottom: 5px;;
    font-family: 'Montaga';

    .addNewBookButton{
        margin-bottom: 10px;
    }
    button{
        font-size: 12px;
    }
    .libraryCards{
        display: flex;
        flex-wrap: wrap;
        row-gap: 10px;
        column-gap: 5px;
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
                                                            // author={eachBook.author}
                                                            // price={eachBook.price}
                                                            genre={eachBook.genre}
                                                            // location={eachBook.location}
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