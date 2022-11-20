import React from 'react'
import styled from 'styled-components'
import images from "./Assets/learn.png"

const Investors = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>Our Investors</Top>
                <P>We are grateful to be backed by some of the best <br />in the world.</P>
            </Left>

            <Right>
                <Images src={images} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Investors

const Images = styled.img`
    object-fit: cover;
    width: 100%;
`

const Right = styled.div`
    width: 50%;
    display: flex;
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
    font-weight: 400;
    color: #132128;
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
    padding-bottom: 90px;
`