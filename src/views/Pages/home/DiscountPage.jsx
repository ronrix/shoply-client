import React from 'react'

import styled from 'styled-components'
import {colorPalettes} from '../../../config'

import MainWrapper from '../../components/MainWrapper'

// image
import discountModel from '../../../assets/images/shopping_model.png'

const InnerDiv = styled.div`
	display: flex;
	padding: 2rem;
	border: 2px solid white;
	color: white;
	width: 100%;
`
const Button = styled.button`
	border: 2px solid white;
	outline: none;
	background-color: transparent;
	padding: 0.5rem 1rem;
	color: white;
	font-weight: bolder;
	font-family: Montserrat, sans-serif;
	margin-top: 1rem;
`
const Img = styled.img`
	width: 250px;
	position: absolute;
	right: 4rem;
	bottom: 0;

	@media (max-width: 760px) {
		right: 0;
		width: 150px;
		bottom: 0;
	}
	@media (max-width: 549px) {
		width: 80px;
	}
`

const Text = styled.div`
	font-size: 1.5rem;
	font-weight: bolder;
`

const DiscountPage = () => {
	return (
		<MainWrapper style={{backgroundColor: colorPalettes.darkBlue, padding: '1rem', marginTop: '4rem'}}>
			<InnerDiv>
				<div>
					<Text style={{fontSize: '1rem'}}>ALL UPS FOR GRABS</Text>
					<Text>Enjoy up to 40% off!</Text>
					<Text style={{fontWeight: 'bold', fontSize: '0.8rem'}}>Grab your limited-time discount and 70% off on all products</Text>

					<Button>Shop Now</Button>
				</div>
				<div></div>
				<Img src={discountModel} alt="discount model"/>
			</InnerDiv>
		</MainWrapper>
	)
}

export default DiscountPage