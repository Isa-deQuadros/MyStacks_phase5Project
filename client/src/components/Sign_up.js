import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";


import SeePass from '../images/Frame 2.png'
import SecretPass from '../images/Frame 3.png'

const Container = styled.div`
    width: 325px;
    height: 500px;
    background-color:#F5F5F5;
    color: #7F976A;;
    padding: 15px;
    position: absolute;
    top: 80px;

    a:hover{
        background-color: #7F976A;
        color:#2A0800;
    }
    form{
        text-align: center;
        border-top: 4px solid #7F976A;;
        margin-top: 30px;
    }
    h3{
        text-decoration: underline;
        text-align: center;
    }
    button{
        color: #2A0800;
    }
    button:hover{
        background-color: #7F976A;
        color:#2A0800
        border-radius: 25px;
    }
`

function SignUpForm({functionToHandleSignUpOnChange, functionToHandleSignUpSubmit}){
    const [secretPass, setSecretPass] = useState(true)

    function handleClick(){
        setSecretPass(!secretPass)
    }


    return(
        <Container>
            <Link to='/'>Close</Link>
            <form onSubmit={functionToHandleSignUpSubmit}>
                <h3> Welcome New User</h3>
                <p> A personal library catalog system <br/> perfect for every bibliophile</p>
                <br/>
                <label> First Name: </label>
                <input type="text" placeholder="first name" name="first_name" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <br/>
                <label> Last Name: </label>
                <input  type="text" placeholder="last name" name="last_name" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <br/>
                <label> Username: </label>
                <input  type="text" placeholder="username" name="user_name" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <br/>
                <label> Email: </label> 
                <input type="text" placeholder="email" name="email" onChange={functionToHandleSignUpOnChange}/>
                <br/>
                <br/>
                <label>Password: </label>
                {secretPass? <input type="password" placeholder="password" name="password" onChange={functionToHandleSignUpOnChange}/>
                :
                <input type="text" placeholder="password" name="password" onChange={functionToHandleSignUpOnChange}/>
                }
                {secretPass? <img onClick={handleClick} src={SeePass} alt="see password" height={20} width={20}/> 
                :
                            <img onClick={handleClick} src={SecretPass} alt="secret pass" height={20} width={20}/> }
                <br/>
                <br/>                
                <button type="submit"> Sign Up</button>
            </form>
        </Container>
    )
}
export default SignUpForm