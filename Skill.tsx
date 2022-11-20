import React from 'react'
import styled from 'styled-components'

const Scale = () => {
  return (
    <Container>
        <Top>Your skills are in demand</Top>
        <Bold>The future is yours to create.</Bold>
        <Wrapper>
            <Hold>Python</Hold>
            <Hold>Node.js</Hold>
            <Hold>Kotlin</Hold>
            <Hold>Flask</Hold>
            <Hold>React Native</Hold>
            <Hold>vue.js</Hold>
            <Hold>PHP</Hold>
            <Hold>Android</Hold>
            <Hold>Javascript</Hold>
            <Hold>Ruby</Hold>
            <Hold>C#</Hold>
            <Hold>DevOps</Hold>
            <Hold>Golang</Hold>
            <Hold>Data Scientist</Hold>
            <Hold>React.js</Hold>
            <Hold>Swift</Hold>
            <Hold>SalesForce</Hold>
            <Hold>Java</Hold>
            <Hold>Django</Hold>
        </Wrapper>
        <Button2 wd="370px" br="1px solid black" bc="" cr=""><Text>Apply to the Andela Talent Network</Text></Button2>
    </Container>
  )
}

export default Scale

const Text = styled.div`
    font-size: 19px;
`

const Button2 = styled.div<{wd: string, br: string, bc: string, cr: string}>`
    width: ${(props) => props.wd};
    height: 60px;
    border-radius: 50px;
    border: ${(props) => props.br};
    background-color: ${(props) => props.bc};
    display: flex;
    color: ${(props) => props.cr};
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    margin-top: 50px;
`

const Bold = styled.h2`
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
    font-family: 'Inter',sans-serif;
    color: #132128;
`

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

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`

const Container = styled.div`
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    background-color: #EDEFF1;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`