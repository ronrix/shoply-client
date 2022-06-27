import React from 'react'

import styled from 'styled-components'
import ShopBtn from './ShopBtn.jsx'
import {HeartIcon, CartIcon} from './Icons.jsx'

import {colorPalettes} from '../../config'

const Flex = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
`

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`

const Product = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 5rem;

	@media (max-width: 420px) {
		margin: 0.8rem;
	}
`

const Radio = styled.div`
	width: 20px;
	height: 20px;
	${props => 'background-color: '+props.color};
	border-radius: 50%;
	margin: 0 .5rem;
`

const Div = styled.div`
	font-size: 0.7rem;
	font-weight: bolder;
	margin: 0 0.2rem;
`

const Select = styled.input`
	visibility: hidden;
	&:checked + ${Radio}{
		border: 1px solid white;
		outline: 2px solid ${props => props.value};	
	}
	&:checked + ${Div} {
		font-size: 1.2rem;
	}
`

const BtnWrapper = styled.div`
	margin-top: 4rem;
	display: flex;
	align-items: center;
`

const ProductInfo = ({handleClickSize, handleClickColor}) => {
	return (

	<Product>
		<div>
			<h3 style={{fontWeight: 'bolder', color: colorPalettes.darkBlue}}>SUMMER 21'</h3>
			<p style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: colorPalettes.darkGray}}>Summer layer season is here. Check out new trendy summer collection, stay on style.</p>
		</div>
		<Flex>
			<FlexCol>
				<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Price:</p>
				<p>Php 199.00</p>
			</FlexCol>
			<FlexCol>
				<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Color:</p>
				<Flex>
					<Select type="radio" name="color" value="blue"/>
					<Radio color="blue" id="blue" onClick={handleClickColor}/>
					<Select type="radio" name="color" value="green" />
					<Radio color="green" id="green" onClick={handleClickColor} />
					<Select type="radio" name="color"  value="red"/>
					<Radio color="red" id="red" onClick={handleClickColor} />
				</Flex>
			</FlexCol>
			<FlexCol>
				<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Size:</p>
				<Flex>
					<Select type="radio" name="size" value={'small'} />
					<Div id="small" onClick={handleClickSize}>S</Div>
					<Select type="radio" name="size" value={'medium'} />
					<Div id="medium" onClick={handleClickSize}>M</Div>
					<Select type="radio" name="size" value={'large'} />
					<Div id="large" onClick={handleClickSize}>L</Div>
					<Select type="radio" name="size" value={'x-large'} />
					<Div id="x-large" onClick={handleClickSize}>XL</Div>
				</Flex>
			</FlexCol>
		</Flex>
		<BtnWrapper>
			<ShopBtn>Shop Now</ShopBtn>
			<HeartIcon />
			<CartIcon />
		</BtnWrapper>
	</Product>
	)
}

export default ProductInfo