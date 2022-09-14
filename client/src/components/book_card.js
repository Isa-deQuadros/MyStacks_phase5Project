import styled from "styled-components"
import {useState } from 'react'

import tempIMG from '../images/bookimage.png'
import Close from '../images/closeIMG.png'

const Container= styled.div`
    height:120px;
    width: 90px;
    font-size: 12px;
    border: 1px solid #092327;
    background-color: #76818E;
    color: #bbd8b3;
    display: flex;
    justify-content: center;

    button{
        font-size: 8px;
        height: 14px;
        width: 40px;
        padding-bottom: 3px;
    }

    h6{ 
        width: 70px;
        text-align: center;
        margin: 5px;
        font-size: 9px;;
    }
    img{
        margin-left: 16px;;
    }
`

const BackOfCard = styled.div`
    width: 250px;
    height: 300px;
    background-color: #76818E;
    border: 2px solid white;
    position: fixed;
    z-index: 1;
    font-size: 14px;

    img{
        background-color: whitesmoke;
        margin: 8px;
    }
    img:hover{
        background-color:#bbd8b3 ;
    }
    button:hover{
        background-color: #bbd8b3;
    }

`

function BookCard({title, comment, author, genre, trope, location, price, setCurrentUserBooks, eachBookID}){
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
        fetch(`/books/${eachBookID}`, {method:"DELETE"})
        .then(r => r.json())
        .then(()=> {deleteBooks(eachBookID)})
    }

    function displayBackOfCard(){
        return (
            <BackOfCard>
                <div className='contents'> 
                    <img onClick={setingBackofCard} src={Close} alt="close" height={15} width={15}/>
                    <p>Title: {title} </p>
                    {/* <p> Author: {author.first_name} {author.last_name} </p> */}
                    <p> Genre: {genre} </p>
                    <p> Trope: {trope} </p>
                    <p> Location: {location} </p>
                    <p> Price: ${price}</p>
                    <p>Comment: {comment}</p>
                    <button onClick={deleteClick} className="delete"> Delete </button>
                </div>
            </BackOfCard>
        )
    }

    function displayFrontOfCard(){
        return(
            <Container>
                <div className="Front">
                <h6>{title}</h6>
                <img onClick={setingBackofCard} src={tempIMG} alt="book cover" height={60} width={50} />
                </div>

            </Container>
        )
    }
    
    return(
        <Container>
            {showingfrontofBookCard? displayFrontOfCard()
                :
                displayBackOfCard()
            }   
        </Container>
        
    )
}
export default BookCard;