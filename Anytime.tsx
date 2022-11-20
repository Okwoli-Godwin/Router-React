import React from 'react'
import styled from 'styled-components'

const Anytime = () => {
  return (
    <Container>
        <Top>Anytime, anywhere – with Andela, <br />the future of work is here</Top>
        <P>Discover how leading companies have built impactful global teams with Andela</P>

    </Container>
  )
}

export default Anytime

const P = styled.div`
    text-align: center;
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
`

const Top = styled.h2`
    font-style: italic;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    text-align: center;
    display: flex;
`

const Container = styled.div`
padding-top: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`