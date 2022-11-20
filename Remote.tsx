import React from 'react'
import styled from 'styled-components'
import images from "./Assets/bg.png"

const Remote = () => {
  return (
    <Container>
        <Left>
            <Top>Build a brilliant remote team <br /> quickly</Top>
            <P>We specialize in helping our highly-skilled, global technology talent <br />
             community connect with hundreds of leading companies.</P>
             <Button wd="290px" br="" bc="#56C870"><Tex1>Build your dream team</Tex1></Button>
             <Down>Get the Enterprise Advantage </Down>
        </Left>
        <Right>
            <Line>
                <Circle>1</Circle>
                <Card></Card>
                <Circle>2</Circle>
                <Card></Card>
                <Circle>3</Circle>
            </Line>
            <BolderC>
                <Bolder>Smart skill matching</Bolder>
                <Pr>Our intuitive machine learning and AI platform finds you the <br />
                best match for any role.</Pr>

                <Bolder>Meet the best talent</Bolder>
                <Pr>Easily schedule interviews and meet top technologists that fit<br />
                within your team.</Pr>

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
    padding-bottom: 47px;
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
`

const Right = styled.div`
    width: 50%;
    display: flex;
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
    transition: .2s ease-in-out 0s;
    cursor: pointer;
    align-items: center;
    :hover{
        transform: scale(1.10);
    }
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
    font-style: italic;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    margin-left: 40px;
    color: white;
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column
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
		/* background-color: rgba(3%, 16%, 16%, 0.4); */
		position: absolute;
    }
`