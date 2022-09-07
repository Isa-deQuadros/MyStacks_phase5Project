import styled from "styled-components";

import LibraryContainer from './Library_container'
import NavBar from './navBar'

const Container = styled.div`

`

function HomePage({functionForLogOut, currentUser, currentUserBooks}){


    
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