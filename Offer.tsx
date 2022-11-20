import React from 'react'
import styled from 'styled-components'

const Offer = () => {
  return (
    <Container>
        <Top>We offer you peace of mind</Top>
        <P>We understand that sometimes you want to find talent on your own <br />
        and other times you want some help. We offer you the freedom to do both.</P>

        <Wrapper>
            <Card>
                <Up>Source</Up>
                <Down>We’ll work with you to fully <br />
                understand your technical gaps, <br />
                culture, industry regulations, and <br />
                strategic route. Instantly view a <br />
                curated selection of technologist <br />
                profiles that meet your needs.</Down>
            </Card>
            <Card>
                <Up>Assess</Up>
                <Down>Our proprietary assessments are <br />
                designed to find you the best <br />
                talent by role, no matter where <br />
                they are in the world. Based on <br />
                your team’s goals, meet vetted <br />
                technologists you can trust.</Down>
            </Card>
            <Card>
                <Up>Match</Up>
                <Down>Connect within hours, with <br />
                vetted technologists who can <br />
                easily align with your existing <br />
                teams, tools, and workflows. Our<br />
                matching times are consistently<br />
                twice as fast compared to <br />
                industry standards.</Down>
            </Card>
            <Card>
                <Up>Deliver</Up>
                <Down>With a focus on sustainable <br />
                growth, we’re with you every step <br />
                of the way. From rapid <br />
                onboarding and seamless <br />
                integration to global payroll <br />
                solutions and compliance <br />
                support.</Down>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Offer

const Down = styled.div`
    font-size: 14px;
    line-height: 22px;
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-weight: 300;
`

const Up = styled.h4`
    font-style: italic;
    font-size: 18px;
    line-height: 26px;
    font-family: 'Inria Serif','Garamond',serif;
`

const Card = styled.div`
    padding-top: 10px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 10px;
    background-color: white;
    flex-direction: column
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`

const P = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    text-align: center;
`

const Top = styled.h2`
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    align-items: center;
    background-color: #F8F8F8;
    padding-bottom: 80px;
`