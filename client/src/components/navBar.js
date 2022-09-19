import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import NavBarIMG from'../images/closed_Nav.png'

const Container = styled.div`
    list-style: none;
    background-color: #F5F5F5;
    padding: 5px;
    position: absolute;


`


function NavBar({functionForLogOut}){

    const[showNavList, setShowNavList] = useState(false)

    function navOpenClose(){
        setShowNavList(!showNavList)
    }


    return(
        
        <> 
            <img  onClick={navOpenClose} src={NavBarIMG} alt="Closed Nav" height={20} width={20}/>
            {showNavList ? <Container>
                            <img  onClick={navOpenClose} src={NavBarIMG} alt="Closed Nav" height={20} width={20}/>
                            <li><Link to="/user_profile"> User Profile </Link> </li>
                            <li><Link to="/home"> My Library </Link></li>
                            <li><Link to="/add_a_new_book"> Add A New Book </Link></li>
                            {/* <li>< Link to="/plans"> Plans </Link> </li> */}
                            <li onClick={functionForLogOut}> Logout</li>
                            </Container>
            : 
                null
            }

            
            
        </>
    )
}
export default NavBar