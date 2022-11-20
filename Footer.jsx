import React from 'react'
import styled from 'styled-components'
import images from "./Assets/andela.svg"
import {BsFacebook, BsTwitter, BsGithub, BsInstagram, BsYoutube, BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <Container>
        <Left>
            <Top>
                <Log src={images} />
            </Top>
            <Down>
                <BsFacebook />
                <BsTwitter />
                <BsGithub />
                <BsInstagram />
                <BsYoutube />
                <BsLinkedin />
            </Down>
        </Left>
        <Right>
            <First>
                <One>Discover Talent</One>
                <Two>For Companies</Two>
                <Two>Enterprise</Two>
                <Two>Case studies</Two>
            </First>
            <First>
                <One>Find Work</One>
                <Two>For Technologists</Two>
                <Two>Learning Community</Two>
                <Two>Leadership Program</Two>
                <Two>Resources</Two>
            </First>
            <First>
                <One>Andela</One>
                <Two>About us</Two>
                <Two>Events</Two>
                <Two>Blog</Two>
                <Two>Press Center</Two>
                <Two>Careers</Two>
            </First>
            <First>
                <Two>Privacy Policy</Two>
                <Two>Terms and Conditions</Two>
                <Two>Modern Slavery Statement</Two>
            </First>
        </Right>
    </Container>
  )
}

export default Footer

const Second = styled.div`
    width: 110px;
    display: flex;
    flex-direction: column;
    margin-left: 115px;
`

const Two = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    color: white;
    margin-bottom: 10px;
`

const One = styled.div`
    font-weight: 700;
    color: #fff;
    font-family: 'Inter',sans-serif;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    margin-bottom: 10px;
`

const First = styled.div`
    width: 110px;
    display: flex;
    flex-direction: column;
    margin-left: 115px;
`

const Right = styled.div`
    width: 80%;
    display: flex;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    color: white;
    font-size: 25px;
    justify-content: space-between;
    margin-top: 40px;
`

const Log = styled.img`
    height: 60px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
`

const Left = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #173B3F;
    padding-top: 70px;
    padding-bottom: 40px;
`