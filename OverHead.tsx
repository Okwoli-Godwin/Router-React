import React, {useState} from 'react'
import styled from 'styled-components'
import image from "./Assets/smile.png"
import images from "./Assets/andela.svg"
import images2 from "./Assets/andela2.svg"
import { NavLink } from 'react-router-dom'

const Hero = () => {

    const [scroll, SetScroll] = useState<Boolean>(false)

    	const changeHeaderColor = () => {
		if (window.scrollY >= 70) {
			SetScroll(true);
		} else {
			SetScroll(false);
		}
	};
   
	window.addEventListener("scroll", changeHeaderColor);

  return (
    <Container>
        <Top>Find work that you <br /> love with companies <br />you can trust</Top>
        <P>Join the Andela Talent Network to experience the joy of long-term work, <br /> 
        with vetted companies and competitive compensation.</P>
        <Left>
            <Button wd="370px" br="" bc="#56C870"><Tex>Apply to access exclusive jobs</Tex></Button>
        </Left>
        
    </Container>
  )
}

export default Hero

const Text = styled.div`
    font-size: 19px;
`
const Text1 = styled.div`
    font-size: 20px;
`
const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 70px;
    border-radius: 50px;
    border: ${(props) => props.br};
    background-color: ${(props) => props.bc};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #173B4C;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-top: 60px;
    width: 410px;
    justify-content: space-between;
    z-index: 999;
`
const P = styled.div`
    color: white;
    margin-left: 40px;
    font-size: 18px;
    z-index: 999;
`
const Top = styled.h1`
    font-style: italic;
    font-size: 55px;
    font-weight: 600;
    color: white;
    margin-left: 40px;
    margin-top: 200px;
    z-index: 999;
    span{
        font-family: 'Inria Serif','Garamond',serif;
    }
`
const Container = styled.div`
	height: 700px;
	width: 100%;
	background-color: black;
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	position: relative;
	background-attachment: fixed;

	::before {
		content: "";
		height: 100%;
		width: 100%;
		background-color: rgba(3%, 16%, 16%, 0.6);
		position: absolute;
    }
`
const Tex1 = styled.div`
    font-size: 19px;
`
const Tex = styled.div`
    font-size: 20px;
`
const Button2 = styled.div<{wd: string, br: string, bc: string, cr: string}>`
    width: ${(props) => props.wd};
    height: 40px;
    border-radius: 50px;
    border: ${(props) => props.br};
    background-color: ${(props) => props.bc};
    display: flex;
    color: ${(props) => props.cr};
    justify-content: center;
    align-items: center;
    margin-left: 25px;
`

const Lef = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 40px;
`

const Navs = styled(NavLink)<{co: string}>`
    font-size: 20px;
    margin-left: 60px;
    display: flex;
    text-decoration: none;
    color: ${(props) => props.co};
`

const Mid = styled.div`
    
    height: 100%;
    display: flex;
    align-items: center;
`

const Images = styled.img`

`

const Right = styled.div`
    width: 190px;
    height: 100%;
    align-items: center;
    display: flex;
    margin-left: 30px;
`

const Head = styled.div<{bg: string, cl: string}>`
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    z-index: 999;
    position: fixed;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.cl};
    z-index: 999667776889;
    transition: all 350ms;
    border-bottom: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`