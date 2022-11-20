import React from 'react'
import styled from 'styled-components'
import images from "./Assets/lop.png"

const Tech = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Images src={images} />
            </Left>
            <Right>
                <Top>Build your team today</Top>
                <Bold>Exceptional <br />technical talent</Bold>
                <P>Skilled engineers, product managers, and designers at your fingertips. An <br />
                extensive list of technical services to suit your business needs. Start <br />
                building your world-class team faster with talent from Andela.</P>
                <Button wd="230px" br="" bc="#56C870"><Tex>Discover Talent</Tex></Button>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Tech

const Tex = styled.div`
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
    margin-top: 25px;
`

const P = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    color: white;
    margin-left: 12px;
    margin-top: 35px;
`

const Bold = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: white;
    margin: 0;
    margin-left: 10px;
`

const Top = styled.h5`
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    color: white;
    margin-top: 25px;
    margin-left: 10px;
    margin-bottom: 0;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Images = styled.img`
    width: 93%;
`

const Left = styled.div`
    width: 50%;
    display: flex;
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #173B3F;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
`