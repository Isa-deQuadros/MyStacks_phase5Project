import styled from "styled-components"
import useState from 'react'

const Container= styled.div`
    
`

function BookCard({currentUserBookInfo}){

    const [showingfrontofBookCard, setShowingFrontofBookCard]= useState(true)
    function setingBackofCard(){
        setShowingFrontofBookCard(!showingfrontofBookCard)
    }
    function deleteBook(){
        fetch('/books',{method:"DELETE", headers:{"Content-Type": "application/json"}})
    }
    
    return(
        <Container>
        {showingfrontofBookCard? <div className="Front">
            <h6>{currentUserBookInfo.title}</h6>
            <h6>{currentUserBookInfo.genre}</h6>
            <button onClick={deleteBook}> DELETE </button>
            </div>
            :
            <div className="Back">
            <p>{currentUserBookInfo.comment}</p>
            </div>
        }
        </Container>
        
    )
}
export default BookCard