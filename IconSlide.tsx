import React from "react";
import styled from "styled-components";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./Assets/gold.svg"
import images2 from "./Assets/kraft.svg"
import images3 from "./Assets/git.svg"
import images4 from "./Assets/in.svg"
import images5 from "./Assets/master.png"
import images6 from "./Assets/cloud.png"
import images7 from "./Assets/via.png"
const BrilliantsComp = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4.6,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		// autoplaySpeed: 5000,
		cssEase: "linear",
	};
	return (
		<Container>
			<h2>
				We’re trusted by the best
			</h2>

			<Wrapper>
				<Slider {...settings}>
					<Images1 src={images} />
                    <Images2 src={images2} />
                    <Images3 src={images3} />
                    <Images4 src={images4} />
                    <Images src={images5} />
                    <Images src={images6} />
                    <Images src={images7} />
				</Slider>
			</Wrapper>
		</Container>
	);
};

export default BrilliantsComp;
const Images2 = styled.img`
    height: 30px;
`
const Images4 = styled.img`
    height: 40px;
`
const Images3 = styled.img`
    height: 40px;
`

const Images1 = styled.img`
    height: 60px;
`

const Images = styled.img`
    
`

const Hold = styled.div`
	width: 100%;
	height: 400px;
	background-color: red;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-bottom: 40px;
    background-color: #B0D6CE;
	h2 {
		text-align: center;
		font-size: 40px;
        font-style: italic;
        font-size: 40px;
        line-height: 48px;
        color: #132128;
        padding-bottom: 30px;
	}
`;
const Wrapper = styled.div`
	/* display: flex; */
	width: 100%;
	/* height: 300px; */
	overflow: hidden;
	/* background-color: black; */
`;