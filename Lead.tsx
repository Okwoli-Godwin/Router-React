import React from 'react'
import styled from 'styled-components'
import images from "./Assets/sp.png"

const Lead = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>The world’s leading companies <br />are already here</Top>
                <P>Feel the bustle of the Global Marketplace here at Andela where brilliant <br />
                minds and companies gather from all over the world.</P>
            </Left>
            <Right>
                <Images src={images} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Lead

const Images = styled.img`
    height: 100%;
    width: 100%;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const P = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
`

const Top = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    color: #132128;
    font-weight: 400;
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 40px;
`