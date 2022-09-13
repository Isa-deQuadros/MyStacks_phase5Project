
import styled from "styled-components";

import LibraryContainer from './library_container'
import NavBar from './navBar'


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 79px;
    background-color: #F5F5F5;
    color: #2A0800;
    font-family: 'Montaga';
    font-size: 14px;
    width: 325px;
    height: 500px;
    
    
    .heading{
        display: flex;
        justify-content: space-between;
        width: 300px;
        border-bottom: 3px solid #BBD8B3;
        margin-top: 15px;
        padding-bottom: 8px;;
    }

    h4{
        margin:0;
    }
`

function HomePage({functionForLogOut, currentUser, currentUserBooks, setCurrentUserBooks}){


    
    return(
        <Container>
            <div className="Platform">
                <div className="heading">
                    <NavBar className="nav" functionForLogOut={functionForLogOut}/>
                    <h4> Welcome {currentUser.user_name}</h4>
                </div>
                <LibraryContainer currentUserBooks={currentUserBooks} setCurrentUserBooks={setCurrentUserBooks}/>
            </div>
        </Container>
    )
}
export default HomePage