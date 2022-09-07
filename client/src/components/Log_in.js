import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div`
`

function LogInForm({functionToHandleLogInChange, functiontoHandleLogInSubmit}){

    return(
        <Container>
            <Link to='/'> Close</Link>
            <form onSubmit={functiontoHandleLogInSubmit}>
                <h3> Welcome Back </h3>
                
                <label> Username: </label>
                <input type='text' placeholder="enter Username" name='user_name'  onChange={functionToHandleLogInChange}/>
                <br/>
                <label> Password:</label>
                <input type='password' placeholder="enter password" name='password' onChange={functionToHandleLogInChange}/>
                
                <button type="submit"> Log In </button>
            </form>
        </Container>
    )
}
export default LogInForm