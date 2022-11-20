import React from 'react'
import styled from 'styled-components'
import images from "./Assets/jerem.png"
import images2 from "./Assets/vit.png"
import images3 from "./Assets/mary.png"
import images4 from "./Assets/jeff.png"
import images5 from "./Assets/alva.png"
import images6 from "./Assets/sac.png"
import images7 from "./Assets/cou.png"
import images8 from "./Assets/kev.png"
import images9 from "./Assets/tis.png"
import images10 from "./Assets/kir.png"
import images11 from "./Assets/mike.png"

const Together = () => {
  return (
    <Container>
        <Top>Brilliant minds and companies come <br /> together to build the future</Top>
        <P>Meet the team dedicated to helping the world’s best <br /> companies build the world’s best teams.</P>

        <Wrapper>
            <Card>
                <Up>
                    <Images src={images} />
                </Up>
                <Down>
                    <Bold>Jeremy Johnson</Bold>
                    <Mall>Co-Founder & CEO</Mall>
                </Down>
            </Card>
            <Card>
                <Up>
                    <Images src={images2} />
                </Up>
                <Down2>
                    <Bold>Vitri Bhandari</Bold>
                    <Mall>Chief People Officer</Mall>
                </Down2>
            </Card>
            <Card>
                <Up>
                    <Images src={images3} />
                </Up>
                <Down3>
                    <Bold>Mary Decker</Bold>
                    <Mall>Chief of Staff</Mall>
                </Down3>
            </Card>
            <Card>
                <Up>
                    <Images src={images4} />
                </Up>
                <Down2>
                    <Bold>Jeff Pedersen</Bold>
                    <Mall>Chief Financial Officer</Mall>
                </Down2>
            </Card>
            <Card>
                <Up>
                    <Images src={images5} />
                </Up>
                <Down>
                    <Bold>Alvaro Oliveira</Bold>
                    <Mall>Chief Network Officer</Mall>
                </Down>
            </Card>
            <Card>
                <Up>
                    <Images src={images6} />
                </Up>
                <Down3>
                    <Bold>Sachin Bhagwat</Bold>
                    <Mall>Chief Revenue Officer</Mall>
                </Down3>
            </Card>
            <Card>
                <Up>
                    <Images src={images7} />
                </Up>
                <Down2>
                    <Bold>Courtney Machi</Bold>
                    <Mall>VP of Product</Mall>
                </Down2>
            </Card>
            <Card>
                <Up>
                    <Images src={images8} />
                </Up>
                <Down3>
                    <Bold>Kevin Pope</Bold>
                    <Mall>VP of Engineering</Mall>
                </Down3>
            </Card>
            <Card>
                <Up>
                    <Images src={images9} />
                </Up>
                <Down2>
                    <Bold>Tisbe Galindo</Bold>
                    <Mall>EVP, Financial Planning</Mall>
                </Down2>
            </Card>
            <Card>
                <Up>
                    <Images src={images10} />
                </Up>
                <Down>
                    <Bold>Kirsten Canton</Bold>
                    <Mall>EVP, General Counsel</Mall>
                </Down>
            </Card>
            <Card>
                <Up2>
                    <Images src={images11} />
                </Up2>
                <Down4>
                    <Bold>Mike <br />Ndimurukundo</Bold>
                    <Mall>Managing Director, <br />Rwanda</Mall>
                </Down4>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Together

const Mall = styled.div`
    font-size: 12px;
    line-height: 16px;
    color: #132128;
    text-align: center;
`

const Bold = styled.div`
    font-weight: 600;
    color: #132128;
    font-family: 'Inter',sans-serif;
    text-align: center;
`

const Down4 = styled.div`
    width: 100%;
    display: flex;
    height: 40%;
    background-color: #FDF0DC;
    justify-content: center;
    align-items: center;
    flex-direction: column
`

const Down3 = styled.div`
    width: 100%;
    display: flex;
    height: 25%;
    background-color: #FDF0DC;
    justify-content: center;
    align-items: center;
    flex-direction: column
`

const Down2 = styled.div`
    width: 100%;
    display: flex;
    height: 25%;
    background-color: #B0D6CE;
    justify-content: center;
    align-items: center;
    flex-direction: column
`

const Down = styled.div`
    width: 100%;
    display: flex;
    height: 25%;
    background-color: #ECEDFD;
    justify-content: center;
    align-items: center;
    flex-direction: column
`

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Up2 = styled.div`
    width: 100%;
    height: 60%;

`

const Up = styled.div`
    width: 100%;
    height: 75%;

`

const Card = styled.div`
    width: 175px;
    height: 250px;
    border-radius: 10px;
    background-color: red;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-left: 10px;
    margin-bottom: 10px;
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 100px;
`

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
    justify-content: center;
    padding-bottom: 60px;
`