import React from 'react'
import styled from 'styled-components'
import image from "./Assets/andela.svg"
import images from "./Assets/andela2.svg"

const Header = () => {
  return (
    <Container>
        <Text>Andela Launches New Platform <br />
        to Power the Future of Customized Work</Text>
        
            <Button wd="180px" br="" bc="#56C870"><Tex>Find Out More</Tex></Button>
    </Container>
  )
}

export default Header
const Tex = styled.div`
    font-size: 20px;
`
const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 70px;
    border-radius: 50px;
    border: ${(props) => props.br};
    background-color: ${(props) => props.bc};
    cursor: pointer;
    transition: .2s ease-in-out 0s;
    display: flex;
    margin-left: 230px;
    justify-content: center;
    align-items: center;
    :hover{
        transform: scale(1.10);
    }
`
const Text = styled.div`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: white;
    margin-left: 40px;
`

const Container = styled.div`
    
    width: 100%;
    height: 140px;
    display: flex;
    background-color: #173B3F;
    display: flex;
    align-items: center;
`
