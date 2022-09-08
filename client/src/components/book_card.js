import styled from "styled-components"
import {useState } from 'react'

const Container= styled.div`
    height:200px;
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
`

function BookCard({title, comment, price, currentUserBooks}){
    console.log("Current Books", currentUserBooks.length)
    

    const [showingfrontofBookCard, setShowingFrontofBookCard]= useState(true)
    function setingBackofCard(){
        setShowingFrontofBookCard(!showingfrontofBookCard)
    }
    
    return(
        <Container onClick={setingBackofCard}>
            {showingfrontofBookCard? <div className="Front">
                <h6>{title}</h6>
                <br/>
                <button> DELETE </button>
                </div>
                :
                <div className="Back">
                    <p> {title} </p>
                    <p>{comment}</p>
                    <p>{price} </p>
                </div>
            }   
        </Container>
        
    )
}
export default BookCard;