import React from 'react'
import styled from 'styled-components'
import images from "./Assets/Pix.png"

const Many = () => {
  return (
    <Container>
        <Top>Grow your potential beyond borders</Top>
        <P>Connect with a global network and land international opportunities.</P>
        <Button wd="300px" br="" bc="#56C870"><Tex1>Discover opportunities</Tex1></Button>
    </Container>
  )
}

export default Many

const Tex1 = styled.div`
    font-size: 20px;
`

const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 67px;
    border-radius: 50px;
    border: ${(props) => props.br};
    margin-left: 40px;
    margin-top: 30px;
    background-color: ${(props) => props.bc};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #173B3F;
    z-index: 6767656;
`

const P = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    color: white;
    z-index: 45456;
    margin-left: 17px;
`

const Top = styled.h2`
    font-style: italic;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    color: white;
    z-index: 454555;
    margin-left: 17px;
`

const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    background-image: url(${images});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    background-attachment: fixed;
    flex-direction: column;
    justify-content: center;

    ::before {
		content: "";
		height: 100%;
		width: 100%;
		background-color: rgba(3%, 16%, 16%, 0.7);
		position: absolute;
    }
`