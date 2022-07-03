import React from 'react'
import ProductInfo from '../../components/ProductInfo.jsx'

import styled from 'styled-components'

const ProductDetails = styled.div`
	flex: 1;
`

const Flex = styled.div`
	display: flex;
	width: 100%;
	position: relative;

	@media (max-width: 630px) {
		flex-direction: column;
	}
`

const Details = ({handleClickSize, handleClickColor}) => {
	const stocks = 20

	

	return (
		<ProductDetails>
			<h6 style={{fontWeight: 'bolder'}}>Set Variation</h6>

			<Flex>
				<ProductInfo handleClickSize={handleClickSize} handleClickColor={handleClickColor} flex />
			</Flex>

			<h6 style={{margin: '1rem 0', fontWeight: 'bolder'}}>
				Stocks Left: {stocks}
			</h6>

			<div>
				<h6 style={{fontWeight: 'bolder'}}>Product Details</h6>
				<div style={{fontSize: '0.8rem'}}>
					<div>Brand New Shoes</div>
					<div>1 Belt</div>
					<div>1 Wrist Watch</div>
					<div>Shade</div>
					<div>Long Pants</div>
					<div>T-Shirt</div>
					<div>No Warranty</div>
				</div>
			</div>

		</ProductDetails>
	)
}

export default Details