import styled from 'styled-components'
import { useState } from 'react'
import {Link} from 'react-router-dom'

import SeePass from '../images/Frame 2.png'
import SecretPass from '../images/Frame 3.png'

const Container = styled.div`
    background-color:#F5F5F5;
    color: #7F976A;
    height: 500px;
    width:325px;
    position: absolute;
    top: 80px;

    .platform{
        display: flex;
        flex-direction: column;
    }

    a{
        height:20px;
        width: 40px;
        margin-top: 15px;
        margin-left: 10px;
    }
    a:hover{
        background-color: #76818E;
        color:#E2D23B;
    }

    form{
        text-align: center;
        border-top: 4px solid #7F976A;
        margin-top: 40px;
        width: 325px;
    }
    button{
        margin-top: 20px;
    }
    button:hover{
        background-color: #76818E;
        color: #E2D23B
    }
    h3{
        text-decoration: underline;
    }

`

function LogInForm({functionToHandleLogInChange, functiontoHandleLogInSubmit}){

    const [secretPass, setSecretPass] = useState(true)

    function handleClick(){
        setSecretPass(!secretPass)
    }

    return(
        <Container>
            <div className="platform">
                <Link to='/'> Close</Link>
                <form onSubmit={functiontoHandleLogInSubmit}>
                    <h3> Welcome Back </h3>
                
                    <label> Username: </label>
                    <input type='text' placeholder="enter Username" name='user_name'  onChange={functionToHandleLogInChange}/>
                    <br/>
                    <br/>
                    <label> Password:  </label>
                    {secretPass? <input type="password" placeholder="password" name="password" onChange={functionToHandleLogInChange}/>
                        :
                                <input type="text" placeholder="password" name="password" onChange={functionToHandleLogInChange}/>
                    }
                    {secretPass? <img onClick={handleClick} src={SeePass} alt="see password" height={20} width={20}/> 
                    :
                                <img onClick={handleClick} src={SecretPass} alt="secret pass" height={20} width={20}/> 
                    }                    
                    <br/>
                    <button type="submit"> Log In </button>
                </form>
            </div>
        </Container>
    )
}
export default LogInForm