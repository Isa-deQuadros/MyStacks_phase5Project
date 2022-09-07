import { useState } from "react";
import styled from "styled-components";

import LibraryContainer from './library_container'
import NavBar from './navBar'

const Container = styled.div`

`

function HomePage({functionForLogOut, UserBookArray, currentUser}){


    
    return(
        <Container>
            <div className="heading">
                <NavBar functionForLogOut={functionForLogOut}/>
                <h4> Welcome {currentUser.user_name}</h4>
            </div>
            <LibraryContainer UserBookArray={UserBookArray}/>
        </Container>
    )
}
export default HomePage