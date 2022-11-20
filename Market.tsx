import React from 'react'
import styled from 'styled-components'
import images from "./Assets/lol.png"

const Brill = () => {
  return (
    <Container>
        <Tab>Join our global marketplace today</Tab>
        <Hold>
            <Button wd="130px" br="" bc="white"><Tex1>Find work</Tex1></Button>
            <Button wd="230px" br="" bc="#56C870"><Tex1>Discover Talent</Tex1></Button>
        </Hold>
    </Container>
  )
}

export default Brill

const Hold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center
`

const Tex1 = styled.div`
    font-size: 20px;
`

const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 67px;
    border-radius: 50px;
    border: ${(props) => props.br};
    margin-top: 10px;
    transition: .2s ease-in-out 0s;
    background-color: ${(props) => props.bc};
    display: flex;
    justify-content: center;
    margin-left: 25px;
    align-items: center;
    cursor: pointer;
    color: #173B3F;
    z-index: 6767656;
    :hover{
        transform: scale(1.10);
    }
`

const Tab = styled.h2`
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: white;
    z-index: 45767;
`

const Container = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    align-items: center;
    background-image: url(${images});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    background-attachment: fixed;
    flex-direction: column;
    justify-content: center;
    ::before {
		content: "";
		height: 100%;
		width: 100%;
		background-color: rgba(3%, 16%, 16%, 0.6);
		position: absolute;
    }
`