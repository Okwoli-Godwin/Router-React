import React, {useState} from 'react'
import styled from 'styled-components'
import image from "./Assets/ann.png"
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
      <>
           {scroll ? (
            <Head bg="white" cl="black" bd="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Right to="/">
            <Images src={images2} />
        </Right>
        <Mid>
            <Navs to="experts" co="black">For Technology Experts</Navs>
            <Navs to="business" co="black">Business</Navs>
            <Navs to="" co="black">Enterprise</Navs>
            <Navs to="about" co="black">About Us</Navs>
        </Mid>
        <Lef>
            <Button2 wd="180px" br="1px solid black" bc="" cr=""><Text>Apply for Jobs</Text></Button2>
            <Button2 wd="150px" br="" bc="#56C870" cr="black"><Text1>Hire Talents</Text1></Button2>
        </Lef>
    </Head>
           ) : (
            <Head bg="" cl="white" bd="">
        <Right to="/">
            <Images src={images} />
        </Right>
        <Mid>
            <Navs to="experts" co="white">For Technology Experts</Navs>
            <Navs to="business" co="white">Business</Navs>
            <Navs to="" co="white">Enterprise</Navs>
            <Navs to="about" co="white">About Us</Navs>
        </Mid>
        <Lef>
            <Button2 wd="180px" br="1px solid white" bc="" cr=""><Text>Apply for Jobs</Text></Button2>
            <Button2 wd="150px" br="" bc="#56C870" cr="black"><Text1>Hire Talents</Text1></Button2>
        </Lef>
    </Head>
           )}
      </>  
    
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
    color: #2A936B;
    transition: .2s ease-in-out 0s;
    cursor: pointer;
    margin-top: -15px;
    :hover{
        transform: scale(1.10);
    }
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
		background-color: rgba(3%, 16%, 16%, 0.7);
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
    transition: .2s ease-in-out 0s;
    align-items: center;
    cursor: pointer;
    margin-left: 25px;
    :hover{
        transform: scale(1.10);
    }
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

const Right = styled(NavLink)`
    width: 190px;
    height: 100%;
    align-items: center;
    display: flex;
    margin-left: 30px;
`

const Head = styled.div<{bg: string, cl: string, bd: string}>`
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
    box-shadow: ${(props) => props.bd};
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
`