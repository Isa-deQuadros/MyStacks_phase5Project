import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import NavBar from'../images/closed_Nav.png'

const Container = styled.div`

`


function navBar({functionForLogOut}){

    // const [showNavList, setShowNavList] = useState(false)

    // function clickingtochangeState(){
    //     setShowNavList(!showNavList)
    // }


    return(
        
        <> 
            <img src={NavBar} alt="Closed Nav" height={30} width={30}/>
            <Container>
                <li><Link to="/user_profile"> User Profile </Link> </li>
                <li><Link to="/home"> My Library </Link></li>
                <li onClick={functionForLogOut}> Logout</li>
            </Container>

            
            
        </>
    )
}
export default navBar