import React from 'react'
import styled from 'styled-components'
import Git from "./Assets/git.svg"
import In from "./Assets/in.svg"
import sr from "./Assets/sera.svg"
import kr from "./Assets/kraft.svg"
import sei from "./Assets/sei.svg"
import gold from "./Assets/gold.svg"

const Logo = () => {
  return (
    <Container>
        <Top>Trusted by</Top>
        <Down>
            <Images src={Git} />
            <Images2 src={In} />
            <Images3 src={sr} />
            <Images4 src={kr} />
            <Images5 src={sei} />
            <Images6 src={gold} />
        </Down>
    </Container>
  )
}

export default Logo
const Images6 = styled.img`
    height: 40px;
`
const Images5 = styled.img`
    height: 20px;
`
const Images4 = styled.img`
    height: 15px;
`
const Images3 = styled.img`
    height: 15px;
`
const Images2 = styled.img`
    height: 33px;
`
const Images = styled.img`
    
`

const Down = styled.div`
    width: 80%;
    display: flex;
    height: 100px;
    align-items: flex-end;
    justify-content: space-between;
`

const Top = styled.div`
    font-family: 'Inria Serif','Garamond',serif;
    font-size: 33px;
    font-weight: 400;
`

const Container = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
    background-color: #E0F1EB;
`