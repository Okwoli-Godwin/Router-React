import React from 'react'
import styled from 'styled-components'

const Scale = () => {
  return (
    <Container>
        <Top>Scale faster with Andela</Top>
        <Bold>What skills will drive your vision?</Bold>
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
    </Container>
  )
}

export default Scale

const Bold = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    clear: both;
    margin: 0px 0px 24px 0px;
    font-weight: 400;
    color: #132128;
`

const Top = styled.h5`
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    font-family: 'Inter',sans-serif;
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
    transition: .2s ease-in-out 0s;
    cursor: pointer;

    :hover{
        transform: scale(1.10);
        color: #56C870;
    }
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`

const Container = styled.div`
    width: 100%;
    padding-top: 110px;
    display: flex;
    justify-content: center;
    background-color: #EDEFF1;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`