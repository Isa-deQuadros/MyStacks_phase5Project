import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div``

function NewBookForm(){

    const [newBookFormData, setNewBookFormData] = useState({
        title:'',
        comment:''
    })

    const navigate= useNavigate()
    const HandleSubmit=(synthEvent)=>{
        // synthEvent.preventDefault()
        // fetch('/books', {
        //     method:"POST",
        //     headers:{"Content-Type": "application/json"},
        //     body: JSON.stringify(newBookFormData)
        // })
        // .then(r => r.json())
        // .then (() =>{ console.log(newBookFormData)
        //         setCurrentUserBooks([...currentUserBooks, newBookFormData])
        //         navigate(`/home`)
        // } )
    }

    // const handleChange=(synthEvent)=>{
    //     setNewBookFormData({...newBookFormData, [synthEvent.target.name]: synthEvent.target.value})
    // }

    // function handleClick(){
    //     navigate('/home')
    // }

    return(
        <Container>
            {/* <button onClick={handleClick}> Close </button>
            <form onSubmit={HandleSubmit}> 
                <h2> Add A New Book </h2>

                    <label> Title </label>
                    <input type="text" name="title" onChange={handleChange}/>
                    <br/>
                    <label> Comment </label>
                    <input type="text" name="comment" onChange={handleChange}/>
                    <br/>
                    <button type="submit"> Add Book </button>
            </form> */}
        </Container>
    )
}
export default NewBookForm
