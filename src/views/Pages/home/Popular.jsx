import React, {useState, useEffect, useRef} from 'react'

import styled from 'styled-components'
import {colorPalettes} from '../../../config'
import {ArrowBarLeft, ArrowBarRight} from 'react-bootstrap-icons'

import ShopBtn from '../../components/ShopBtn.jsx'
import {HeartIcon, CartIcon} from '../../components/Icons.jsx'

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

	@media (max-width: 377px) {
		flex-direction: column;
	}
`

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	width: 250px;

	@media (max-width: 377px) {
		order: 2;
	}
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
	z-index: 100; 

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
	z-index: 100;

	&:hover {
		color: ${colorPalettes.violet};
	}
`

const Img = styled.img`
	width: 200px;


	@media (max-width: 377px) {
		width: 100%;
	}
`

const Popular = () => {
	const minSwipeDistance = 50 
	const data = [0,0,0,0,0,0,0]
	const [scroll, setScroll] = useState({x: 0})
	const [swipe, setSwipe] = useState({touchStart: 0, touchEnd: 0})

	// refs
	const innerRef = useRef(null)
	const ref = useRef(null)

	function handleRightScroll() {
		if(scroll.count >= data.length) return
		setScroll({x: scroll.x + 500 * -1})
	}

	function handleLeftScroll() {
		if(scroll.x >= 0) return
		setScroll({x: scroll.x + 500})
	}

	const handleTouchMove = (e) => setSwipe({...swipe, touchEnd: e.targetTouches[0].clientX})
	const handleTouchStart = (e) => setSwipe({touchStart: e.targetTouches[0].clientX})

	function handleTouchEnd(e) {

		const distance = swipe.touchStart - swipe.touchEnd
		if(distance < -minSwipeDistance) { // is left swipe 
			if(innerRef.current.getBoundingClientRect().left >= ref.current.getBoundingClientRect().left) {
				setScroll({...scroll, x: 0})
				return
			}
			setScroll({...scroll, x: scroll.x - distance}) 
		}
		if(distance > minSwipeDistance) { // is right swipe
			if(innerRef.current.getBoundingClientRect().right <= -ref.current.getBoundingClientRect().right) return 
			setScroll({...scroll, x: scroll.x + distance * -1}) 
		}
	}

	useEffect(() => {
	}, [scroll])


	return (
		<div ref={ref} style={{marginTop: '4rem', position: 'relative', width: '100%', overflow: 'hidden'}} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
			{
				scroll.x !== 0 ? <ArrowLeft onClick={handleLeftScroll}/> : null
			}
			{scroll.x === -((data.length * 500) - 1000)  ? null : <ArrowRight onClick={handleRightScroll} />} 
			<Title>Popular this Week</Title>
			<Wrapper style={{transform: `translateX(${scroll.x}px)`}} ref={innerRef}>
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
					<Img src={'assets/images/summer-wear-for-ladies.jpeg'} alt="popular this week" />
				</Card>
			))}

			</Wrapper>
		</div>
	)
}

export default Popular