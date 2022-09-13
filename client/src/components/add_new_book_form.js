import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import Close from '../images/closeIMG.png'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 79px;
    background-color: #76818E;
    color: #BBD8B3;
    font-family: 'Montaga';
    width: 325px;
    height: 500px;

    img{
        margin-top: 15px;
        margin-left: 10px;
    }

    form{
        margin-top: 100px;
        margin-bottom: 170px;
        text-decoration: underline;
        border-top: 2px solid #BBD8B3;
        border-bottom: 2px solid #BBD8B3;
    }
`



function NewBookForm({currentUserBooks, setCurrentUserBooks}){

    const [newBookFormData, setNewBookFormData] = useState({
        title:'',
        comment:''
    })

    const navigate= useNavigate()
    const HandleSubmit=(synthEvent)=>{
        synthEvent.preventDefault()
        fetch('/books', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(newBookFormData)
        })
        .then(r => r.json())
        .then (() =>{ console.log(newBookFormData)
                setCurrentUserBooks([...currentUserBooks, newBookFormData])
                navigate(`/home`)
        } )
    }

    const handleChange=(synthEvent)=>{
        setNewBookFormData({...newBookFormData, [synthEvent.target.name]: synthEvent.target.value})
    }

    function handleClick(){
        navigate('/home')
    }

    return(
        <Container>
            <img onClick={handleClick} src={Close} alt="close" quality={100} height={10} width={10}/>
            <form onSubmit={HandleSubmit}>
                <h2> Add A New Book </h2>

                    <label> Title: </label>
                    <input type="text" name="title" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label> Comment: </label>
                    <input type="text" name="comment" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <button type="submit"> Add Book </button>
            </form>
        </Container>
    )
}
export default NewBookForm
