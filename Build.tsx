import React from 'react'
import styled from 'styled-components'
import images from "./Assets/mind.png"

const Build = () => {
  return (
    <Container>
        <Left>
            <Mind src={images} />
        </Left>
        <Right>
            <Top>Build your team today</Top>
            <Sec>We’ve cracked the code on <br /> creating engineering teams</Sec>
            <P>Skilled engineers, product managers, and designers at your fingertips. An extensive <br />
            list of technical services to suit your business needs. Start building your world-class <br />
            team faster with talent from Andela.</P>

            <Button wd="200px" br="" bc="#56C870"><Tex1>Build your team</Tex1></Button>
        </Right>
    </Container>
  )
}

export default Build

const Tex1 = styled.div`
    font-size: 20px;
`

const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 70px;
    border-radius: 50px;
    cursor: pointer;
    transition: .2s ease-in-out 0s;
    border: ${(props) => props.br};
    margin-left: 100px;
    margin-top: 30px;
    background-color: ${(props) => props.bc};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        transform: scale(1.10);
    }
`

const P = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
     margin-left: 100px;
`

const Sec = styled.h2`
    font-size: 43px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    margin-left: 100px;
`

const Top = styled.h5`
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    margin: 0;
    margin-bottom: -27px;
    font-family: 'Inter',sans-serif;
    margin-left: 100px;
`

const Right = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`

const Mind = styled.img`
    height: 310px;
    margin-left: 40px;
`

const Left = styled.div`
    width: 40%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 60px;
    padding-bottom: 60px;
`