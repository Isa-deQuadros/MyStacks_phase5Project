import styled from "styled-components"
import {useState } from 'react'

import tempIMG from '../images/bookimage.png'

const Container= styled.div`
    height:100px;
    width: 80px;
    font-size: 12px;
    /* border: 2px solid #2A0800; */

    button{
        font-size: 8px;
        height: 12px;
        width: 40px
    }
`

function BookCard({title, comment, price, currentUserBooks, setCurrentUserBooks, eachBookID}){
    console.log("Current Books", currentUserBooks.length)
    

    const [showingfrontofBookCard, setShowingFrontofBookCard]= useState(true)
    function setingBackofCard(){
        setShowingFrontofBookCard(!showingfrontofBookCard)
    }

    function deleteBooks(id){
        setCurrentUserBooks((prevBook) => {
            const filterBooksById = prevBook.filter(
                (book) => book.id !== id
            ); return filterBooksById
        })
    }

    function deleteClick(){
        fetch(`/books`, {method:"DELETE"})
        .then(r => r.json())
        .then(()=> deleteBooks(eachBookID))
    }
    
    return(
        <Container onClick={setingBackofCard}>
            <button onClick={deleteClick}> DELETE </button>
            {showingfrontofBookCard? <div className="Front">
                <h6>{title}</h6>
                <img src={tempIMG} alt="book cover" height={50} width={40} />
                </div>
                :
                <div className="Back">
                    <p> {title} </p>
                    <p>{comment}</p>
                    <p>${price} </p>
                </div>
            }   
        </Container>
        
    )
}
export default BookCard;