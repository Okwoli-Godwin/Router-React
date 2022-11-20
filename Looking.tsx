import React from 'react'
import styled from 'styled-components'
import images from "./Assets/mrp.png"
import {GrCheckmark} from "react-icons/gr"

const Looking = () => {
  return (
    <Container>
        <Top>Find what you’re looking for and more</Top>
        <Wrapper>
            <Left>
                <Images src={images} />
            </Left>
            <Right>
                <Bold>Rigorous vetting for talent from <br />multiple regions</Bold>
                <P> <Icons><GrCheckmark /></Icons>Quick and efficient</P>
                <P> <Icons><GrCheckmark /></Icons>Only top quality options</P>
                <P> <Icons><GrCheckmark /></Icons>Stress-free hiring of global talent</P>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Looking
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
    margin-bottom: 10px;
`

const Bold = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
`

const Right = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
`

const Images = styled.img`
    width: 95%;
`

const Left = styled.div`
    width: 55%;
    display: flex;
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
`

const Top = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    color: #132128;
    font-weight: 400;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
`