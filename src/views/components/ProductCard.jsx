import React, {useState} from 'react'

import styled from 'styled-components'

import {StarFill} from 'react-bootstrap-icons'
import {colorPalettes} from '../../config'
import sample from '../../assets/images/shirt-on-chair.png'

import {HeartIcon, CartIcon} from './Icons.jsx'
import {ArrowLeft, ArrowRight} from 'react-bootstrap-icons'


const Img = styled.img`
	width: 200px;
`

const Overlay = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background-color: rgba(39, 54, 72, 0.5);
	color: white;
	padding: 1rem;
	opacity: 0;

	transition: opacity 150ms ease-in;
`
const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

const Card = styled.div`
	width: 200px;
	position: relative;
	cursor: pointer;
	margin: 0 0.5rem;

	&:hover > ${Overlay} {
		opacity: 1;
	}
`


const WrapperOverflow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
`
const ProductCardWrapper = styled.div`
	width: 1100px;
	display: flex;

	transition: transform 150ms ease-in;
`

const ArrowL = styled(ArrowLeft)`
	font-size: 2rem;
	&:hover{ 
		color: ${colorPalettes.violet};
	}
	cursor: pointer;
	z-index: 100;
`

const ArrowR = styled(ArrowRight)`
	font-size: 2rem;
	&:hover{ 
		color: ${colorPalettes.violet};
	}
	cursor: pointer;
	z-index: 100;
`

const TheCard = () => {
	return (
		<Card>
			<Img src={sample} alt="product thumbnail"/>
			<Overlay>
				<div>
					<h5 style={{fontWeight: 'bolder'}}>Sharpee A1</h5>
					<Flex>
						<StarFill />
						<span style={{marginLeft: '0.5rem'}}>4.7</span>
					</Flex>
				</div>
				<Flex>
					<h6 style={{fontWeight: 'bolder'}}>Php 500</h6>
					<HeartIcon style={{fontSize: '1.2rem'}}/>
					<CartIcon style={{fontSize: '1.2rem'}}/>
				</Flex>
			</Overlay>
		</Card>
	)
}

const ProductCard = ({products}) => {

	const minSwipeDistance = 50 // card width
	const [scroll, setScroll] = useState({x: 0, count: 5})
	const [swipe, setSwipe] = useState({
		touchStart: 0,
		touchEnd: 0,
	})

	function handleScrollRight() {
		if(scroll.count > products.length+2) return
		setScroll({x: scroll.x + 200 * -1, count: scroll.count + 1})
	}

	function handleScrollLeft() {
		if(scroll.x >= 0) return
		setScroll({x: scroll.x + 200, count: scroll.count - 1})
	}

	const handleTouchMove = (e) => setSwipe({...swipe, touchEnd: e.targetTouches[0].clientX})

	const handleTouchStart = (e) => setSwipe({...swipe, touchStart: e.targetTouches[0].clientX})
	const handleTouchEnd = () => {
		const distance = swipe.touchStart - swipe.touchEnd
		if(distance < -minSwipeDistance) { // is left swipe 
			if(scroll.x === 0) return
			setScroll({...scroll, x: scroll.x + 200, count: scroll.count - 1}) 
		}
		if(distance > minSwipeDistance) { // is right swipe
			if(scroll.count > products.length + 4) return
			setScroll({...scroll, x: scroll.x + 200 * -1, count: scroll.count + 1}) 
		}
	}

	return (
		<WrapperOverflow style={{marginTop: '1rem'}}>
			{
				scroll.x !== 0 ? <ArrowL onClick={handleScrollLeft}/> : null
			}
			<div style={{overflow: 'hidden'}} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
				<ProductCardWrapper style={{transform: `translateX(${scroll.x}px)`}}>
					{products.map((a,i) => <TheCard key={i} />)}
				</ProductCardWrapper>
			</div>
			{
				scroll.count < products.length + 2 ? <ArrowR onClick={handleScrollRight} /> : null
			}
		</WrapperOverflow>
	)
}

export default ProductCard