import React from 'react'
import styled from 'styled-components'
import images from "./Assets/shot.png"

const Remote = () => {
  return (
    <Container>
        <Left>
            <Top>Spark a <br /> thousand <br />connections</Top>
            <P>Becoming part of a community <br />
             has never been easier.</P>
             <Button wd="200px" br="" bc="#56C870"><Tex1>Get Started</Tex1></Button>
        </Left>
        <Right>
            <Line>
                <Circle>1</Circle>
                <Card></Card>
                <Circle>2</Circle>
                <Card2></Card2>
                <Circle>3</Circle>
            </Line>
            <BolderC>
                <Bolder>Demonstrate your skills</Bolder>
                <Pr>Join our expert community by completing a short assessment<br />
                to showcase your skills.</Pr>

                <Bolder>Personalized matching</Bolder>
                <Pr>You’ve done the work to build your experience and<br />
                knowledge. Now we’ll find your dream role through enhancing <br />
                your profile, career coaching, and introducing you to the <br />
                world’s most innovative companies.</Pr>

                <Bolder>Continued excellence</Bolder>
                <Pr>Integrate your new team members quickly and effectively. Let <br />
                us manage payroll and compliance.</Pr>
            </BolderC>
        </Right>
    </Container>
  )
}

export default Remote

const Pr = styled.div`
    display: flex;
    width: 500px;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    margin-top: 10px;
    padding-bottom: 27px;
`

const Bolder = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
`

const BolderC = styled.div`
    width: 200px;
    height: 110px;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 90px;
`

const Card2 = styled.div`
    width: 2px;
    height: 120px;
    background-color: white;
    margin-left: 30px;
`

const Card = styled.div`
    width: 2px;
    height: 80px;
    background-color: white;
    margin-left: 30px;
`

const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
`

const Line = styled.div`
    width: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 90px;
    margin-left: 70px;
    z-index: 6767676;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    z-index: 676767;
`

const Down = styled.div`
    margin-left: 40px;
    margin-top: 15px;
    color: white;
`

const Tex1 = styled.div`
    font-size: 20px;
`

const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 67px;
    border-radius: 50px;
    border: ${(props) => props.br};
    margin-left: 40px;
    margin-top: 30px;
    background-color: ${(props) => props.bc};
    display: flex;
    justify-content: center;
    align-items: center;
`

const P = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    color: white;
    margin-left: 40px;
`

const Top = styled.h2`
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    margin-left: 40px;
    color: white;
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    z-index: 6767676;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    display: flex;
    background-image: url(${images});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    background-attachment: fixed;

    ::before {
		content: "";
		height: 100%;
		width: 100%;
		background-color: rgba(3%, 16%, 16%, 0.6);
		position: absolute;
    }
`