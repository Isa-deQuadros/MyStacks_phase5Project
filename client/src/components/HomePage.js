import { useEffect, useState } from "react";
import styled from "styled-components";

import LibraryContainer from './Library_container'
import NavBar from './navBar'

const Container = styled.div`

`

function HomePage({functionForLogOut, currentUser, currentUserBooks}){
    console.log("User Books State", currentUserBooks)


    
    return(
        <Container>
            <div className="heading">
                <NavBar functionForLogOut={functionForLogOut}/>
                <h4> Welcome {currentUser.user_name}</h4>
            </div>
            <LibraryContainer currentUserBooks={currentUserBooks}/>
        </Container>
    )
}
export default HomePage