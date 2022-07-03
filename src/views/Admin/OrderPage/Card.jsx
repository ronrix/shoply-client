import React from 'react'

import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import { CaretDownFill, CaretUpFill }  from 'react-bootstrap-icons'

import {colorPalettes} from '../../../config'

const Card = styled.div`
	border: 1px solid ${colorPalettes.darkGray};
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	position: relative;
	padding: 1rem;
	max-height: ${props => props.expand ? 'auto' : '140px' };
	overflow: hidden;
`

const SecondaryText = styled.div`
	font-size: 0.8rem;
	color: ${colorPalettes.darkGray};
	font-weight: bold;
`

const PrimaryText = styled.div`
	font-size: 0.9rem;
	color: ${colorPalettes.darkBlue};
	font-weight: bolder;
`

const ExpandButton = styled(CaretDownFill)`
	position: absolute;
	right: 15px;
	top: 50%;
	cursor: pointer;

	&:hover {
		color: ${colorPalettes.violet};
	}
` 

const ExpandButtonUp = styled(CaretUpFill)`
	position: absolute;
	right: 15px;
	top: 50%;
	cursor: pointer;

	&:hover {
		color: ${colorPalettes.violet};
	}
` 

const Flex = styled.div`
	display: flex;
`

const CardCart = () => {

	const [ expand, setExpand ] = React.useState( false )

	function handleExpand() {
		setExpand(!expand)
	}

	React.useEffect(() => {
		console.log( expand )
	}, [ expand ])

	return (
		<Card expand={expand}>
			<Row>
				<Col>
					<SecondaryText>Order ID: 12912129</SecondaryText>
					<Flex>
						<img src={'/assets/images/Model-PNG.png'} alt="sample one" width='15%' height='15%' />
						<div>
							<PrimaryText>SUMMER 21'</PrimaryText>
							<SecondaryText>Variation: <span>BLACK</span> <span>LARGE</span></SecondaryText>
							<SecondaryText>Quantity: 2</SecondaryText>
							<div>
								<PrimaryText>Order Total: Php. 100</PrimaryText>
								<SecondaryText>Please pay Php. 100 upon delivery</SecondaryText>
							</div>
						</div>
					</Flex>
				</Col>

				<Col>
					<SecondaryText>Date: July 4, 2022</SecondaryText>
				</Col>
			</Row>
			<div style={{marginTop: '1rem'}}>
				<Flex>
					<img src={'/assets/images/colored/payment-icon.png'} alt="payment icon" width='5%' height="2%" />
					<div style={{marginLeft: '0.5rem'}}>
						<PrimaryText>Payment Method</PrimaryText>
						<SecondaryText>Cash on Delivery</SecondaryText>
					</div>
				</Flex>

				<Flex>
					<img src={'/assets/images/colored/shipping-icon-colored.png'} alt="delivery icon" width='5%' height='2%' />
					<div style={{marginLeft: '0.5rem'}}>
						<PrimaryText style={{color: colorPalettes.darkGray}}>Delivery Address</PrimaryText>
						<SecondaryText style={{fontSize: '0.7rem'}}>Ronrix Lante</SecondaryText>
						<SecondaryText style={{fontSize: '0.7rem'}}>098123109283129</SecondaryText>
						<SecondaryText style={{fontSize: '0.7rem'}}>E. Tibay St. Wawa Pililla Rizal, South Luzon, Rizal 1910</SecondaryText>
					</div>
				</Flex>
			</div>
			{expand ? <ExpandButtonUp onClick={ handleExpand } /> : <ExpandButton onClick={ handleExpand } />}
		</Card>
	)
}

export default CardCart