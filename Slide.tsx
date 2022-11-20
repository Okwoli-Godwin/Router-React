import React from "react";
import styled from "styled-components";
import purple from "./Asset/purple.svg";

interface Boxprop {
  bg: string;
  img: string;
  text: string;
}

const AnytimeBox: React.FC<Boxprop> = ({ bg, img, text }) => {
  return (
    <div>
      <Box bg={bg}>
        <Right>
          <h3>
            <i>Case Studies</i>
          </h3>
          <p>{text}</p>
        </Right>
        <Left>
          <img src={img} alt="" />
        </Left>
      </Box>
    </div>
  );
};

export default AnytimeBox;

const Box = styled.div<{ bg: string }>`
  width: 44vw;
  height: 49vh;
  border-radius: 20px;
  background-color: ${({ bg }) => bg};
  margin-right: 20px;
  /* padding: 20px; */
  overflow: hidden;
  display: flex;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 100;
    margin: 0;
  }
  p {
    width: 20vw;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    font-family: sans-serif;
    line-height: 30px;
  }
`;
const BtnHold = styled.div`
  width: 12vw;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: stretch;
  }
`;
