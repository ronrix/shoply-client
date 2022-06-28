import React from 'react'

import styled from 'styled-components'
import {colorPalettes} from '../../../config'

import thumbnail_1 from '../../../assets/images/summer-outfit.png'
import thumbnail_2 from '../../../assets/images/black-beauty.png'

const WrapperFlex = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-top: 7rem;


	@media (max-width: 666px) {
		flex-direction: column;
	}
`

const Card = styled.div`
	width: 500px;
	height: 300px;
	display: flex;
	background-color: white;
	padding: 1rem;

	@media (max-width: 1033px) {
		width: 300px;
	}

	@media (max-width: 666px) {
		width: 100%;
		margin: 0.5rem 0;
	}
`

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	width: 60%;
`

const ImgWrapper = styled.div`
	width: 50%;
	overflow: hidden;
	display: grid;
	place-items: center;
`

const Title = styled.h3`
	font-weight: bolder;
	font-size: 0.8rem;
	color: ${colorPalettes.darkBlue};

	@media (max-width: 1033px) {
		font-size: 0.5rem;
	}
`

const ThumbnaiTitle = styled.h2`
	font-weight: bolder;
	font-size: 2rem;
	color: ${colorPalettes.darkBlue};

	@media (max-width: 1033px) {
		font-size: 1rem;
	}
`

const Paragraph = styled.p`
	font-weight: bold;
	color: ${colorPalettes.darkGray};
	font-size: 0.9rem;

	@media (max-width: 1033px) {
		font-size: 0.8rem;
	}
`

const BrowseBtn = styled.button`
	padding: 0.8rem;
	color: white;
	font-weight: bolder;
	background-color: ${colorPalettes.darkBlue};
	font-size: 1rem;
	border: none;
	outline: none;

	transition: background-color 150ms ease;

	&:hover {
		background-color: ${colorPalettes.violet};
	}

	@media (max-width: 1033px) {
		font-size: 0.5rem;
	}
`

const Arrivals = () => {
	return (
		<WrapperFlex>
			<Card>
				<FlexCol>
					<Title>NEW ARRIVALS</Title>
					<div>
						<ThumbnaiTitle>THE BLACK BEAUTY</ThumbnaiTitle>
						<Paragraph>Look so p histicated in our new collection Check out our new of all to staty in trend this season. black clothing ensemble</Paragraph>
					</div>
					<BrowseBtn>Browse Collection</BrowseBtn>
				</FlexCol>
				<ImgWrapper>
					<img src={thumbnail_2} alt="thumnail" width='100%' />
				</ImgWrapper>
			</Card>

			<Card>
				<FlexCol>
					<Title>SUMMER COLLECTION</Title>
					<div>
						<ThumbnaiTitle>SUMMER'S BEST</ThumbnaiTitle>
						<Paragraph>
							Check out our new best summer collectin to stay in trend this summer season
						</Paragraph>
					</div>
					<BrowseBtn>Browse Collection</BrowseBtn>
				</FlexCol>
				<ImgWrapper>
					<img src={thumbnail_1} alt="thumnail" width='100%' />
				</ImgWrapper>
			</Card>
		</WrapperFlex>
	)
}

export default Arrivals