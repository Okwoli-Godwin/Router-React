import React from 'react'
import styled from 'styled-components'

const Achieved = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Bold>We’ve achieved <br />many great things</Bold>
            </Left>
            <Right>
            <Line>
                <Circle>2022</Circle>
                <Card></Card>
                <Circle>2021</Circle>
                <Card></Card>
                <Circle>2020</Circle>
                <Card></Card>
                <Circle>2019</Circle>
                <Card></Card>
                <Circle>2018</Circle>
                <Card></Card>
                <Circle>2017</Circle>
                <Card></Card>
                <Circle>2016</Circle>
                <Card></Card>
                <Circle>2015</Circle>
                <Card></Card>
                <Circle>2014</Circle>
            </Line>
            <BolderC>
                <Bolder>We release our open marketplace</Bolder>
                <Pr>We unlock the ability for our users to interact directly with <br />
                one another while launching new value-added services like <br />healthcare.</Pr>

                <Bolder>$200M Series E funding</Bolder>
                <Pr>Led by Softbank Vision Fund 2 with participation from new<br />
                investor Whale Rock and existing investors including <br />
                Generation Investment Management, Chan Zuckerberg <br />
                Initiative, and Spark Capital.</Pr>

                <Bolder>Global expansion announcement</Bolder>
                <Pr>After proving that remote work was the way of the future, <br />
                we doubled down on our investment in global talent in <br />
                emerging markets around the world.</Pr>

                <Bolder>Welcomed senior remote engineers</Bolder>
                <Pr>Senior engineers in Egypt and Ghana joined the Andela<br />
                community creating our first-ever remote hubs.</Pr>

                <Bolder>Launched pan-African hub</Bolder>
                <Pr>In partnership with the Rwanda Development Board that<br />
                integrates all government agencies responsible for the <br />
                attraction, retention, and facilitation of investments in the <br />
                national economy.</Pr>

                <Bolder>Launched Andela Learning Community (ALC)</Bolder>
                <Pr>We partnered with Google and Udacity to create a technical<br />
                learning program accessible to aspiring developers in Kenya, <br />
                Nigeria, and Uganda.</Pr>

                <Bolder>Launched an all-female cohort of engineers</Bolder>
                <Pr>To increase female representation in tech, Andela Kenya<br />
                opened applications for an all-female contingent in the <br />
                country’s capital of Nairobi.</Pr>

                <Bolder>Our community became international</Bolder>
                <Pr>After incredible success in Nigeria, we opened applications<br />
                to Kenya, Ghana, and South Africa with a new hub in Nairobi.</Pr>

                 <Bolder>Launched our first recruitment cycle</Bolder>
                <Pr>We hired our first cohort – four Nigerian software engineers<br />
                – after receiving 700 applications for 4 spots.</Pr>
            </BolderC>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Achieved

const Pr = styled.div`
    display: flex;
    width: 500px;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    margin-top: 10px;
    padding-bottom: 47px;
`

const Bolder = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    width: 100%;
    display: flex;
`

const BolderC = styled.div`
    width: 400px;
    height: 110px;
    display: flex;
    flex-direction: column;
    color: #132128;
`

const Card = styled.div`
    width: 2px;
    height: 110px;
    background-color: #132128;
    margin-left: 30px;
`

const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #132128;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #132128;
`

const Line = styled.div`
    width: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 70px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    margin-top: 50px;
`

const Bold = styled.h2`
    font-style: italic;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
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
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
`