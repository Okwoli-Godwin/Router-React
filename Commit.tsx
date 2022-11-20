import React from 'react'
import styled from 'styled-components'

const Commit = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Bold>Our commitment to <br />your success</Bold>
            </Left>
            <Right>
                <Hold>
                    <Top>Technologist first culture</Top>
                    <P>Ensuring a seamless experience for technologists is our top priority. You <br />
                    can rest assured there is always someone looking out for your interests <br />
                    and career.</P>
                </Hold>
                <Hold>
                    <Top>Technologist first culture</Top>
                    <P>Ensuring a seamless experience for technologists is our top priority. You <br />
                    can rest assured there is always someone looking out for your interests <br />
                    and career.</P>
                </Hold>
                <Hold>
                    <Top>Technologist first culture</Top>
                    <P>Ensuring a seamless experience for technologists is our top priority. You <br />
                    can rest assured there is always someone looking out for your interests <br />
                    and career.</P>
                </Hold>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Commit

const P = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    margin-top: -16px;
`

const Top = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
`

const Hold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Bold = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
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
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 80px;
`