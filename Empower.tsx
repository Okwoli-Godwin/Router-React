import React from 'react'
import styled from 'styled-components'
import {GrCheckmark} from "react-icons/gr"
import images from "./Assets/lynn.png"

const Empower = () => {
  return (
    <Container>
        <Left>
            <Top>Empower your future</Top>
            <Bold>Why the world’s best <br />talent prefers Andela</Bold>
            <Navs><Icon><GrCheckmark /></Icon>Long-term placements</Navs>
            <Navs><Icon><GrCheckmark /></Icon>Trusted career partner</Navs>
            <Navs><Icon><GrCheckmark /></Icon>Career Guidance</Navs>
            <Navs><Icon><GrCheckmark /></Icon>96% match success</Navs>
        </Left>
        <Right>
            <Images src={images} />
        </Right>
    </Container>
  )
}

export default Empower

const Images = styled.img`
    height: 500px;
`

const Right = styled.div`
    width: 65%;
    display: flex;
    justify-content: center;
`

const Icon = styled.div`
    color: green;
    display: flex;
    align-items: center;
    margin-right: 8px;
`

const Navs = styled.div`
    display: flex;
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    margin-left: 40px;
    margin-bottom: 12px;
`

const Bold = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    margin-left: 40px;
    font-style: italic;
`

const Top = styled.h5`
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    margin: 0;
    margin-bottom: -27px;
    font-family: 'Inter',sans-serif;
    margin-left: 40px;
`

const Left = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 130px;
    padding-bottom: 80px;
`