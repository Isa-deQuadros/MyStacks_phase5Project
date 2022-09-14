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
    h2{
        text-align: center;
        border-top: 2px solid #BBD8B3;
        border-bottom: 2px solid #BBD8B3;
    }
    form{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        text-decoration: underline;
    }
    label{
        margin-bottom: 8px;
    }
    input{
        margin-bottom: 8px;
        width: 100px;
        margin-right: 8px;
        margin-left: 6px;
    }

    .partone{
        display: block;
    }

    .comment{
        height: 80px;
        width: 280px;
        margin-top: 8px;;
    }
    .parttwo{
        display: block;
    }
`



function NewBookForm({currentUserBooks, setCurrentUserBooks}){

    const [newBookFormData, setNewBookFormData] = useState({
        title:'',
        first_name:'',
        last_name:'',
        genre:'',
        trope:'',
        price:'',
        location:'',
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
            <img onClick={handleClick} src={Close} alt="close" quality={100} width={10} height={10}/>
            <form onSubmit={HandleSubmit}>
                <h2> Add A New Book </h2>
                    <div className="partone">
                        <label>Title:</label>
                        <input type="text" placeholder="title" name="title" onChange={handleChange}/>
                        <br/>
                        <label>Author:</label>
                        <input type="text" placeholder="first name" name="first_name" onChange={handleChange}/> 
                        <input type="text" placeholder="last name" name="last_name" onChange={handleChange}/>
                    
                        <label>Genre:</label>
                        <input type="text" placeholder="genre" name="genre" onChange={handleChange}/>
                    <br/>
                        <label>Trope:</label>
                        <input type="text" placeholder="trope" name="trope" onChange={handleChange}/>
                    </div>
                    <div className="parttwo"> 
                        <label>Location:</label>
                        <input type="text" placeholder="location" name="location" onChange={handleChange}/>
                        <label>Price:</label>
                        <input type="text" placeholder="price" name="price" onChange={handleChange}/>
                    </div>
                    <br/>
                    <label>Comment:</label>
                    <input className="comment" type="text" placeholder="comment" name="comment" onChange={handleChange}/>
                    
                    <br/>
                    <button type="submit"> Add Book </button>
            </form>
        </Container>
    )
}
export default NewBookForm