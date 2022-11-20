import React from 'react'
import styled from 'styled-components'
import images from "./Assets/com.png"

const System = () => {
  return (
    <Container>
        <Top>Our vibrant community</Top>
        <P>Rizwan Jafri shares his Andela story from Lahore, Pakistan.</P>
        <Box>
            <Images src={images} />
        </Box>
    </Container>
  )
}

export default System

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Box = styled.div`
    width: 58%;
    height: 450px;
    margin-top: 30px;
`

const P = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    color: white;
`

const Top = styled.h2`
    font-style: italic;
    color: white;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
`

const Container = styled.div`
    width: 100%;
    background-color: #173B3F;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    padding-top: 10px;
`