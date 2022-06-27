import React, {useState, useEffect} from 'react'

import styled from 'styled-components'
import {colorPalettes} from '../../../config'
import {ArrowBarLeft, ArrowBarRight} from 'react-bootstrap-icons'

import ShopBtn from '../../components/ShopBtn.jsx'
import {HeartIcon, CartIcon} from '../../components/Icons.jsx'

// image
import summerWear from '../../../assets/images/summer-wear-for-ladies.jpeg'

const Wrapper = styled.div`
	display: flex;
	width: 1200px;

	transition: transform 150ms ease-in;
`

const Title = styled.h3`
	font-weight: bolder;
	font-size: 1.5rem;
	color: ${colorPalettes.darkBlue};
`

const Card = styled.div`
	display: flex;
	padding: 1rem;
	background-color: white;
	width: 1000px;
	margin: 0 0.5rem;
`

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	width: 250px;
`

const CardTitle = styled.h3`
	font-weight: bold;
	font-size: 1.2rem;
	color: ${colorPalettes.darkBlue};
`

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`

const ArrowLeft = styled(ArrowBarLeft)`
	font-size: 2rem;
	position: absolute;
	left: 0;
	top: 50%;
	cursor: pointer;
	z-index: 1000;

	&:hover {
		color: ${colorPalettes.violet};
	}
`

const ArrowRight = styled(ArrowBarRight)`
	font-size: 2rem;
	position: absolute;
	right: 0;
	top: 50%;
	cursor: pointer;
	z-index: 1000;

	&:hover {
		color: ${colorPalettes.violet};
	}
`

const Popular = () => {
	const data = [0,0,0,0,0,0,0]
	const [scroll, setScroll] = useState({x: 0, count: 2})

	function handleRightScroll() {
		if(scroll.count >= data.length) return
		setScroll({x: scroll.x + 500 * -1, count: scroll.count + 1})
	}

	function handleLeftScroll() {
		if(scroll.x >= 0) return
		setScroll({x: scroll.x + 500, count: scroll.count - 1})
	}


	useEffect(() => {
		console.log(scroll)
	}, [scroll])


	return (
		<div style={{marginTop: '4rem', position: 'relative', width: '100%', overflow: 'hidden'}}>
			{
				scroll.x !== 0 ? <ArrowLeft onClick={handleLeftScroll}/> : null
			}
			{
				scroll.count < data.length ? <ArrowRight onClick={handleRightScroll} /> : null
			}
			<Title>Popular this Week</Title>
			<Wrapper style={{transform: `translateX(${scroll.x}px)`}}>
			{ data.map((v, id) => (
				<Card key={id}>
					<FlexCol>
						<div>
							<CardTitle>SUMMER WEAR FOR LADIES</CardTitle>
							<p style={{fontSize: '0.8rem'}}>Ladies bring out the inner fashionista in you with our summer collection</p>
						</div>
						<Flex>
							<ShopBtn style={{padding: '0.3rem', fontSize: '0.8rem',  borderRadius: '0'}}>Shop Now</ShopBtn>
							<HeartIcon style={{fontSize: '1.3rem'}} />
							<CartIcon style={{fontSize: '1.3rem'}}/>
						</Flex>
					</FlexCol>
					<img src={summerWear} alt="popular this week" width="200px" />
				</Card>
			))}

			</Wrapper>
		</div>
	)
}

export default Popular