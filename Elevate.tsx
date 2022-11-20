import React from 'react'
import styled from 'styled-components'

const Elevate = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>Elevate your business with in <br /> demand skills</Top>
                <P>We will help you find the right fit for your business.</P>
                <Button2 wd="200px" br="1px solid black" bc="" cr=""><Text>Schedule a call</Text></Button2>
            </Left>
            <Right>
                <Hold>Angular</Hold>
                <Hold>Quality Assurance</Hold>
                <Hold>VueJs</Hold>
                <Hold>PHP</Hold>
                <Hold>Dev Ops</Hold>
                <Hold>React</Hold>
                <Hold>Data Engineers</Hold>
                <Hold>C#</Hold>
                <Hold>Ruby</Hold>
                <Hold>Java</Hold>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Elevate

const Hold = styled.div`
    border-radius: 40px;
    border: 1px solid #f8f8f8;
    background-color: #fff;
    font-weight: 300;
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 48px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    width: 280px;
    height: 50px;
    background-color: white;
    transition: all .15s ease-in-out!important;
    padding-left: 20px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
`

const Text = styled.div`
    font-size: 19px;
`

const Button2 = styled.div<{wd: string, br: string, bc: string, cr: string}>`
    width: ${(props) => props.wd};
    height: 63px;
    border-radius: 50px;
    border: ${(props) => props.br};
    background-color: ${(props) => props.bc};
    display: flex;
    color: ${(props) => props.cr};
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`

const P = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
`

const Top = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #F8F8F8;
    padding-top: 60px;
    justify-content: center;
    padding-bottom: 50px;
`