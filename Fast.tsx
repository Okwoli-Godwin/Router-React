import React from 'react'
import styled from 'styled-components'
import images from "./Assets/top.png"
import {GrCheckmark} from "react-icons/gr"

const Fast = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Images src={images} />
            </Left>
            <Right>
                <Top>Scale fast and with ease</Top>
                <P><Icons><GrCheckmark /></Icons>Onboarding is 70% faster</P>
                <P><Icons><GrCheckmark /></Icons>We provide additional support</P>
                <P><Icons><GrCheckmark /></Icons>Get the team you need, regardless of size</P>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Fast

const Icons = styled.div`
    margin-right: 10px;
`

const P = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    display: flex;
    margin-left: 70px;
    margin-bottom: 10px;
`

const Top = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
    margin-left: 70px;
    margin-top: -3px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Images = styled.img`
    height: 470px;
`

const Left = styled.div`

`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 100px;
`