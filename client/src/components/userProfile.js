import styled from "styled-components"

import NavBar from "./navBar"

const Container= styled.div`
    display: flex;
    justify-content: center;
    margin-top: 79px;
    background-color: #F5F5F5;
    color: #2A0800;
    font-family: 'Montaga';
    width: 325px;
    height: 500px;

    .contents{
        margin: 0;
        width: 295px;
        margin-top: 58px;
        
    }
    .heading{
        margin-top: 15px;
        margin-left: 10px;
    }
    h2{
        font-size: 20px;
    }
    h5{
        font-size: 16px;
    }
`



function UserProfile({currentUserInformation}){
    return(
        <Container>
            <div className="heading">
                <NavBar />
            </div>
            <div className="contents">
            <h2> {currentUserInformation.user_name}</h2>
            <img src="https://previews.123rf.com/images/onoontour/onoontour1405/onoontour140500018/29011509-dinosaur-enjoy-reading-a-book.jpg" 
                    alt="profile" 
                    height={50} 
                    width={50}
            />
            <div className="userInformation">
                <h5> First Name : {currentUserInformation.first_name}</h5>
                <h5> Last Name : {currentUserInformation.last_name} </h5>
                <h5> Username : {currentUserInformation.user_name}</h5>
                <h5> Email : {currentUserInformation.email}</h5>

            </div>
            </div>
        </Container>
    )
}
export default UserProfile