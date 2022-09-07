import styled from "styled-components";
import { Link } from "react-router-dom";

import BackgroundImage from '../images/thomas-kelley-unsplash.jpg' 




const Container=styled.div`
    .text{
        text-align: center;
        /* background-color: rgba(127,151,106,88); */
        color: #3A2E39;
    }
`

const StyledLink=styled(Link)`
    background-color: rgba(127,151,106,88);
    color: #3A2E39;
    border: 1px solid #3A2E39;
    display: grid;
    width: fit-content;
    margin:10px;
`

function LandingPage(){

    return(
        <Container>
            <div className="buttons">
                <StyledLink to="/sign_up" > Sign Up </StyledLink>
                <StyledLink to="/log_in" > Log In </StyledLink>
            </div>
            <div className="text">
                <h2> Home Library Catalog </h2>
                <p> The perfect way to organize <br/>your home library 
                and have <br/> the best recomentations for<br/> every bookish 
                occasion.
                </p>
            </div>
        </Container>
    )
}
export default LandingPage