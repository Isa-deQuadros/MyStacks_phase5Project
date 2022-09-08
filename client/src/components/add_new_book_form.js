import { useState } from "react"
import { useNavigate } from "react-router-dom"






function NewBookForm({currentUserBooks, setCurrentUserBooks}){

    const [newBookFormData, setNewBookFormData] = useState({
        title:'',
        author:'',
        // genre:'',
        // trope:'',
        price:'',
        // location:'',
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
        <>
            <button onClick={handleClick}> Close </button>
            <form onSubmit={HandleSubmit}>
                <h2> Add A New Book </h2>

                    <label> Title </label>
                    <input type="text" name="title" onChange={handleChange}/>
                    <br/>
                    <label> Author </label>
                    <input type="text" name="author" onChange={handleChange}/>
                    <br/>
                    {/*
                    <label> Genre </label>
                    <input type="text" name="genre" onChange={handleChange}/>
                    <br/> */}
                    {/* <label> Trope </label>
                    <input type="text" name="trope" onChange={handleChange}/>
                    <br/> */}
                    {/* <label> Location </label>
                    <input type="text" name="location" onChange={handleChange}/>
                    <br/> */}
                    {/* <label> Condition <label/>
                    <label> Status <label/>
                    */}
                    <label> Price </label>
                    <input type="text" name="price" onChange={handleChange}/>
                    <br/>
                    <label> Comment </label>
                    <input type="text" name="comment" onChange={handleChange}/>
                    <br/>
                    <button type="submit"> Add Book </button>
            </form>
        </>
    )
}
export default NewBookForm
