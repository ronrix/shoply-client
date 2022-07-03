import React from 'react'

import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import {colorPalettes} from '../../../config'


const DarkWrapper = styled.div`
	margin: 4rem 0;
	width: 100%;
	height: 300px;
	background-color: ${colorPalettes.darkBlue};
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: 1rem;
	position :relative;

	@media (max-width: 515px) {
		height: auto;
	}
`

const H3 = styled.h3`
	font-weight: bolder;
	color: white;
	font-size: 2rem;
	margin: 2rem;

	@media (max-width: 666px) {
		font-size: 1.5rem;
	}
`

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	bottom: -50px;
	right: 0;
	left: 0;
	width: 100%;

	@media (max-width: 515px) {
		position: static;
		flex-direction: column;
		bottom: 0;
	}
`
const Link = styled(Card.Link)`
	padding: 1rem;
	font-weight: bolder;
	color: ${colorPalettes.darkGray};
	text-decoration: none;

	transition: color 150ms ease;

	&:hover {
		color: ${colorPalettes.violet};
	}

	@media (max-width: 1033px) {
		font-size: 0.7rem;
	}
	@media (max-width: 666px) {
		font-size: 0.4rem;
	}
	@media (max-width: 515px) {
		font-size: 0.7rem;
	}
`

const InfoCard = styled(Card)`
	width: 18rem;
	background-color: ${colorPalettes.light};
	height: 250px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	@media (max-width: 1033px) {
		width: 13rem;
	}
	@media (max-width: 666px) {
		width: 10rem;
		height: 200px;
	}
	@media (max-width: 515px) {
		width: 100%;
		height: auto;
		margin: 0.5rem 0;
	}
`

const Subtitle = styled(Card.Subtitle)`
	color:${colorPalettes.darkGray};
	font-size: 1.5rem;

	@media (max-width: 666px) {
		font-size: 0.8rem;
	}
	@media (max-width: 515px) {
		font-size: 1rem;
	}
`

const Text = styled(Card.Text)`
	font-size: 0.8rem;
	color: ${colorPalettes.darkGray};

	@media (max-width: 666px) {
		font-size: 0.5rem;
	}
	@media (max-width: 515px) {
		font-size: 0.7rem;
	}
`

const ShoplyInfo = () => {

	return (
		<DarkWrapper>
			<H3>Stay in Trend With Shoply</H3>
			<Flex>
				<InfoCard>
					<Card.Body>
					   <Card.Title><img src={'assets/images/colored/box1-icon-colored.png'} style={{width: '10%'}} alt="box icon"/></Card.Title>
					   <Subtitle className="mb-2 fw-bolder">Latest Styles</Subtitle>
					   <Text className="fw-bolder"> Our design helps to follow the latest fashion Enjoy the best prices for high quality </Text>
					</Card.Body>
				  <Link href="#">Read More</Link>
				</InfoCard>

				<InfoCard>
				  <Card.Body>
				    <Card.Title><img src={'assets/images/colored/best-price-icon-colored.png'} style={{width: '10%'}}  alt="best price icon"/></Card.Title>
				    <Subtitle className="mb-2 text-muted fw-bolder" >Best Prices</Subtitle>
				    <Text className="fw-bolder"> Enjoy the best prices for high quality styles to help you stay updated with clothing and more. </Text>
				  </Card.Body>
				  <Link href="#">Read More</Link>
				</InfoCard>

				<InfoCard>
				  <Card.Body>
				    <Card.Title><img src={'assets/images/colored/shipping-icon-colored.png'} style={{width: '10%'}} alt="track icon"/></Card.Title>
				    <Subtitle className="mb-2 text-muted fw-bolder">Free Shipping</Subtitle>
				    <Text  className="fw-bolder" > We provide shipping locally you can order from your local anywhere anytime</Text>
				  </Card.Body>
				  <Link href="#">Read More</Link>
				</InfoCard>
			</Flex>
		</DarkWrapper>
	)
}


export default ShoplyInfo