import { useState } from "react"
import styled from "styled-components"

import NavBar from "./navBar"
import VersionOne from './future_plans_components/version1'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 79px;
    background-color: #F5F5F5;
    color: #2A0800;
    font-family: 'Montaga';
    width: 325px;
    height: 500px;

    .heading{
        margin-top: 10px;
        margin-left: 10px;
    }
`

function FuturePlans(){
    const [displayVOne, setDisplayVOne] = useState(false)
    const [displayVTwo , setDisplayVTwo]= useState (false)

    function handleClickVersionOne(){
        setDisplayVOne(true)
        setDisplayVTwo(false)
    }

    function handleClickVersionTwo(){
        setDisplayVOne(false)
        setDisplayVTwo(true)
    }
    
    return(
        <Container>
            <div className="heading">
                <NavBar />
            </div>
            <div className="versionBar" >
            <div className=" Version 1">
                <h3 onClick={handleClickVersionOne}> V.1</h3>
            </div>
            <div className=" Version 2">
                <h3 onClick={handleClickVersionTwo}> V.2</h3>
            </div>
            </div>
            {displayVOne? 
                <div className="Versions"> 
                <h2> Version One </h2>
                    <div className="content">
                        {/* <VersionOne /> */}
                    </div>
                </div>
            : 
            null}

            {displayVTwo? <div className="Versions"> <h2> Version Two </h2> </div>: null}



        </Container>
    )
}
export default FuturePlans