import { useState } from "react"
import { useNavigate } from "react-router-dom"






function NewBookForm({UserBookArray, SetUserBookArrayFunction}){
    const [newBookFormData, setNewBookFormData] = useState({
        title:'',
        author:'',
        genre:'',
        trope:'',
        location:'',
        comment:''
    })

    const navigate= useNavigate()

    const handleSubmit=(synthEvent)=>{
        synthEvent.preventDefault()
        fetch('/books', {
            method:"POST",
            header:{"Content-Type": "application/json"},
            body: JSON.stringify(newBookFormData)
        })
        .then(r => r.json())
        .then (newBookdata =>{
                SetUserBookArrayFunction(newBookdata, ...UserBookArray)
                navigate('/home')
        } )

    }

    const handleChange=(synthEvent)=>{
        setNewBookFormData({newBookFormData, [synthEvent.target.name]: synthEvent.target.value})
    }

    function handleClick(){
        navigate('/home')
    }

    return(
        <>
            <button onClick={handleClick}> Close </button>
            <form onSubmit={handleSubmit}>
                <h2> Add A New Book </h2>

                    <label> Title </label>
                    <input type="text" name="title" onChange={handleChange}/>
                    <br/>
                    <label> Author </label>
                    <input type="text" name="author" onChange={handleChange}/>
                    <br/>
                    <label> Genre </label>
                    <input type="text" name="genre" onChange={handleChange}/>
                    <br/>
                    <label> Trope </label>
                    <input type="text" name="trope" onChange={handleChange}/>
                    <br/>
                    <label> Location </label>
                    <input type="text" name="location" onChange={handleChange}/>
                    <br/>
                    {/* <label> Condition </label>
                    <select name='condition' onChange={}>
                        <option value="new"> new </option>
                        <option value='slightly worn'> slightly worn </option>
                        <option value='loved'> loved </option>
                        <option value=" well loved"> well loved </option>
                        <option value=" very well loved"> very well loved</option>
                    </select> */}
                    <label> Comment </label>
                    <input type="text" name="comment" onChange={handleChange}/>
                    <br/>
                    <button type="submit"> Add Book </button>
            </form>
        </>
    )
}
export default NewBookForm
