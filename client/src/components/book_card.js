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

    h2{
        text-align: center;
        padding-top: 4px;
        padding-bottom: 4px;
        border-top: 2px solid #bbd8b3;
        border-bottom: 2px solid #bbd8b3;
        margin-top: 0px;;
    }

    img{
        margin: 8px;
    }
    img:hover{
        background-color:#bbd8b3 ;
    }
    button{
        font-size: 10px;
        height: 16px;
        width: 50px;
        background-color: black;
        color: #bbd8b3;
    }
    button:hover{
        background-color: #bbd8b3;
    }

`

function BookCard({title, comment, author, genre, trope, location, price, setCurrentUserBooks, eachBookID, currentUserBooks, eachBook}){
    const [showingfrontofBookCard, setShowingFrontofBookCard]= useState(true)
    function setingBackofCard(){
        setShowingFrontofBookCard(!showingfrontofBookCard)
    }
    //  have to map through eachBook to get the stuff inside, there are several arrays (author, genre, location, trope)
    // const bookgenre= eachBook.book_genres.map((eachItem)=> {console.log(eachItem.name)})
    // const booklocation= eachBook.book_locations.map((eachItem)=> {console.log(eachItem.name)})
    // const booktrope= eachBook.book_tropes.map((eachItem)=> {console.log(eachItem.name)})
    // const firstName= eachBook.author_name.map((eachItem)=> {console.log(eachItem.first_name)})
    // const lastName= eachBook.author_name.map((eachItem)=> {console.log(eachItem.last_name)})


    
    
    function deleteBooks(id){
        setCurrentUserBooks(currentUserBooks.filter((book)=> book.id !== id))
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
                    <h2>Title: {title} </h2>
                    {/* <p> Author: {author} {author} </p> */}
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