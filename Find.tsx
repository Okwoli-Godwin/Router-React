import React from 'react'
import styled from 'styled-components'
import images from "./Assets/shut.png"
import images2 from "./Assets/slate.png"
import images3 from "./Assets/she.png"
import {GrCheckmark} from "react-icons/gr"

const Find = () => {
  return (
    <Container>
        <Top>Find what you’re looking for and more</Top>
        <Wrapper fd="hgdf">
            <Left>
                <Images src={images} />
            </Left>
            <Right>
                <Up>Grow your career with us</Up>
                <Nav><Icons><GrCheckmark /></Icons> Find meaningful, long-term work with interesting organizations</Nav>
                <Nav><Icons><GrCheckmark /></Icons> Work with an internationally distributed team and company</Nav>
                <Nav><Icons><GrCheckmark /></Icons> Gain additional skills through exclusive learning opportunities</Nav>
                <Nav><Icons><GrCheckmark /></Icons> Network with other technologists to develop your expertise</Nav>
            </Right>
        </Wrapper>
        <Wrapper fd="">
            <Left>
                <Images src={images2} />
            </Left>
            <Right>
                <Up2>Set your own rate</Up2>
                <Nav2><Icons><GrCheckmark /></Icons> Only work with companies we trust</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons> Receive payments on time in your local currency, USD, or in Crypto</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons> Discover salaries that match your skills and experience</Nav2>
            </Right>
        </Wrapper>
        <Wrapper fd="hgdf">
            <Left>
                <Images src={images3} />
            </Left>
            <Right>
                <Up>Work anytime, anywhere</Up>
                <Nav><Icons><GrCheckmark /></Icons> Ditch the commute and work from anywhere</Nav>
                <Nav><Icons><GrCheckmark /></Icons> With roles across different time zones, you choose when you work</Nav>
                <Nav><Icons><GrCheckmark /></Icons> Create a healthy, flexible work-life balance</Nav>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Find

const Icons = styled.div`
    margin-right: 10px;
`

const Nav2 = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
`

const Up2 = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
`

const Nav = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    margin-left: 80px;
`

const Up = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    margin-left: 80px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Images = styled.img`
    width: 92%;
    height: 95%;
    object-fit: cover;
`

const Left = styled.div`
    width: 50%;
    display: flex;
`

const Wrapper = styled.div<{ fd: string }>`
    width: 95%;
    display: flex;
    flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
    padding-bottom: 80px;
`

const Top = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
`