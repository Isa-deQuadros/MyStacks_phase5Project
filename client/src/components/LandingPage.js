import styled from "styled-components";
import { Link } from "react-router-dom";

import BackgroundImage from '../images/thomas-kelley-unsplash.jpg' 




const Container=styled.div`
    color: white; 
    display: flex;
    justify-content: center;
    margin-top: 131px;
    font-family: 'Montaga';


    .Primary{
        width: 325px;
        height: 500px;
        display: flex;
        justify-content: center;
    }

    .platform{
        position: absolute;
        z-index: -1;
    }

    .text{
        text-align: center;
    }
    h2{
        font-size: 25px;
        background-color: #7F976A ;
        width: fit-content;
        padding-top: 2px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 4px;
        display: inline-flex;
        border: 2px solid #3A2E39;
        margin-bottom: 50px;
        margin-top: 40px;
    }

    p{
        background-color: #7F976A;
        width: fit-content;
        padding: 15px;
        display: inline-flex;
        border: 2px solid #3A2E39;
    }

    .buttons {
        position: absolute;
        bottom: 200px;
        display: flex;
    }    
`

const StyledLink=styled(Link)`
    background-color:#7F976A ;
    color: white;
    border: 1px solid #3A2E39;
    display: grid;
    width: 60px;
    height: 20px;
    margin:10px;
    padding: 2px;
    text-align: center;

    :hover{
        background-color: #768183 ;
    }
    
`

function LandingPage(){

    return(
        <Container >
            <div className="Primary">
                <div className='platform'>
                    <img src={BackgroundImage} alt="background" 
                        quality={100}
                        width={325}
                        height={400}
                    />
                </div>

                

                <div className="text">
                    <h2> MyStack </h2>
                    <p> The perfect way to organize <br/>your home library 
                    and have <br/> the best recomentations for<br/> every bookish 
                    occasion.
                    </p>
                </div>

                <div className="buttons">
                    <StyledLink to="/sign_up" > Sign Up </StyledLink>
                    <StyledLink to="/log_in" > Log In </StyledLink>
                </div>
            </div>
        </Container>
    )
}
export default LandingPage