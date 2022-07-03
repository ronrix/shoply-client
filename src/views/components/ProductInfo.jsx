import React from 'react'

import styled from 'styled-components'

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
	cursor: pointer;
`

const Div = styled.div`
	font-size: 0.7rem;
	font-weight: bolder;
	margin: 0 0.2rem;
	cursor: pointer;
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
const ProductInfo = (props) => {
	if(props.flex) {
		return (
			<Flex style={{justifyContent: 'space-around'}}>
				<FlexCol>
					<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Color:</p>
					<Flex>
						<Select type="radio" name="color" value="blue"/>
						<Radio color="blue" id="blue" onClick={props.handleClickColor}/>
						<Select type="radio" name="color" value="green" />
						<Radio color="green" id="green" onClick={props.handleClickColor} />
						<Select type="radio" name="color"  value="red"/>
						<Radio color="red" id="red" onClick={props.handleClickColor} />
					</Flex>
				</FlexCol>
				<FlexCol>
					<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Size:</p>
					<Flex>
						<Select type="radio" name="size" value={'small'} />
						<Div id="small" onClick={props.handleClickSize}>S</Div>
						<Select type="radio" name="size" value={'medium'} />
						<Div id="medium" onClick={props.handleClickSize}>M</Div>
						<Select type="radio" name="size" value={'large'} />
						<Div id="large" onClick={props.handleClickSize}>L</Div>
						<Select type="radio" name="size" value={'x-large'} />
						<Div id="x-large" onClick={props.handleClickSize}>XL</Div>
					</Flex>
				</FlexCol>
			</Flex>
		)
	}

	return (

		<Product>
			{props.info}
			<Flex>
				<FlexCol>
					<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Price:</p>
					<p>Php 199.00</p>
				</FlexCol>
				<FlexCol>
					<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Color:</p>
					<Flex>
						<Select type="radio" name="color" value="blue"/>
						<Radio color="blue" id="blue" onClick={props.handleClickColor}/>
						<Select type="radio" name="color" value="green" />
						<Radio color="green" id="green" onClick={props.handleClickColor} />
						<Select type="radio" name="color"  value="red"/>
						<Radio color="red" id="red" onClick={props.handleClickColor} />
					</Flex>
				</FlexCol>
				<FlexCol>
					<p style={{fontWeight: 'bold', color: colorPalettes.darkGray}}>Size:</p>
					<Flex>
						<Select type="radio" name="size" value={'small'} />
						<Div id="small" onClick={props.handleClickSize}>S</Div>
						<Select type="radio" name="size" value={'medium'} />
						<Div id="medium" onClick={props.handleClickSize}>M</Div>
						<Select type="radio" name="size" value={'large'} />
						<Div id="large" onClick={props.handleClickSize}>L</Div>
						<Select type="radio" name="size" value={'x-large'} />
						<Div id="x-large" onClick={props.handleClickSize}>XL</Div>
					</Flex>
				</FlexCol>
			</Flex>
			{props.children}
		</Product>
	)
}

export default ProductInfo