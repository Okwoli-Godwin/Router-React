import React from 'react'
import styled from 'styled-components'
import images from  "./Assets/lynn.png"

const Means = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Images src={images} />
            </Left>
            <Right>
                <Top>Empower your future</Top>
                <Bold>What Andela means to us</Bold>
                <P>We exist to unlock human potential at scale. We envision a world where the <br />
                most talented people can build a career commensurate with their ability – <br />
                not their race, gender, or geography.
                </P>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Means

const P = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    margin-left: 40px;
`

const Bold = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
    margin-left: 40px;
    margin-bottom: 10;
    margin-top: 7px;
`

const Top = styled.h5`
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 0;
    font-weight: 600;
    font-family: 'Inter',sans-serif;
    color: #132128;
    margin-left: 40px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Images = styled.img`
    width: 85%;
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
    padding-top: 80px;
    padding-bottom: 80px;
    justify-content: center;
`