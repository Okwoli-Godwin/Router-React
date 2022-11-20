import React from "react";
import styled from "styled-components";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./Assets/prof.png"
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
				We’re in the business of changing lives
			</h2>

			<Wrapper>
				<Slider {...settings}>
					<SliderCard bg='coral' bi={images} name="Makan"/>
					<SliderCard bg='#ff8ea6' bi={images} name=""/>
					<SliderCard bg='#9ad9fd' bi={images} name=""/>
					<SliderCard bg='silver' bi={images} name=""/>
					<SliderCard bg='#5bf8c1' bi={images} name=""/>
					<SliderCard bg='#E0F1EB' bi={images} name=""/>
					<SliderCard bg='#E0F1EB' bi={images} name=""/>
					<SliderCard bg='#E0F1EB' bi={images} name=""/>
				</Slider>
			</Wrapper>
		</Container>
	);
};

export default BrilliantsComp;

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
	margin-top: 60px;
	padding-bottom: 50px;
	h2 {
		font-size: 40px;
        line-height: 48px;
        font-family: 'Inria Serif','Garamond',serif;
        font-weight: 400;
        margin-bottom: 70px;
	}
`;
const Wrapper = styled.div`
	/* display: flex; */
	width: 100%;
	/* height: 300px; */
	overflow: hidden;
	/* background-color: black; */
    margin-top: 40px;
`;