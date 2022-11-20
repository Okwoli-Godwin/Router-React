import React from 'react'
import styled from 'styled-components'

const Welcome = () => {
  return (
    <Container>
        <Top>Welcome to the future of <br />meaningful, sustainable work</Top>
        <P>We believe that the sum is greater than our parts – our impact can be seen globally. We specialize in helping our highly-skilled, global technology talent <br />
        community in emerging markets, connect with hundreds of leading companies</P>

        <Card>
            <Box>
                <Text>110+</Text>
                <On>Countries represented on <br />6 continents</On>
            </Box>
            <Box>
                <Text>96%</Text>
                <On>Successful placements</On>
            </Box>
            <Box>
                <Text>84%</Text>
                <On>Increased income for Andelans</On>
            </Box>
            <Box>
                <Text>175,000+</Text>
                <On>Technologists represented</On>
            </Box>
            <Box>
                <Text>18+</Text>
                <On>Months <br /> Average engagement</On>
            </Box>
        </Card>
        <Holder>
            <Button wd="300px" br="1px solid black" bc="white"><Tex1>Apply for Remote Jobs</Tex1></Button>
            <Button wd="200px" br="" bc="#56C870"><Tex1>Hire Talents</Tex1></Button>
        </Holder>
    </Container>
  )
}

export default Welcome

const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Tex1 = styled.div`
    font-size: 20px;
`

const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 70px;
    border-radius: 50px;
    border: ${(props) => props.br};
    margin-left: 40px;
    margin-top: 30px;
    background-color: ${(props) => props.bc};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s ease-in-out 0s;
    cursor: pointer;

    :hover{
        transform: scale(1.10);
    }
`

const On = styled.div`
    font-style: italic;
    font-family: 'Inria Serif','Garamond','Times New Roman',serif;
    color: #132128;
    font-size: 18px;
    text-align: center;
`

const Text = styled.h2`
    font-size: 60px;
    margin-bottom: 0px;
    font-weight: 300;
    font-family: 'Inter',sans-serif;
    color: #132128;
    line-height: 1;
`

const Box = styled.div`
    width: 370px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #B0D6CE;
    flex-direction: column;
    margin-left: 30px;
    margin-bottom: 40px;
`

const Card = styled.div`
    width: 90%;
    margin-top: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    text-align: center;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`