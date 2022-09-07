import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
`

function SignUpForm({functionToHandleSignUpOnChange, functionToHandleSignUpSubmit}){


    return(
        <Container>
            <Link to='/'>Close</Link>
            <form onSubmit={functionToHandleSignUpSubmit}>
                <h3> Welcome New User</h3>
                <p> A personal library catalog system perfect for every bibliophile</p>
                <label> First Name: </label>
                <input type="text" placeholder="first name" name="first_name" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <label> Last Name: </label>
                <input  type="text" placeholder="last name" name="last_name" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <label> Username: </label>
                <input  type="text" placeholder="username" name="user_name" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <label> Email: </label> 
                <input type="text" placeholder="email" name="email" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <label> Password: </label>
                <input type="password" placeholder="password" name="password" onChange={functionToHandleSignUpOnChange}/>
                <br/>                
                <button type="submit"> Sign Up</button>
            </form>
        </Container>
    )
}
export default SignUpForm