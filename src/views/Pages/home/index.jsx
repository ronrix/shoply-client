import React, {useState, useEffect} from 'react'

import styled from 'styled-components'

// components
import Sidebar from '../../components/Sidebar.jsx'
import Topbar from '../../components/Topbar.jsx'
import MainWrapper from '../../components/MainWrapper.jsx'
import ProductCard from '../../components/ProductCard.jsx'
import CategoriesBtn from '../../components/CategoriesBtn.jsx'
import ProductInfo from '../../components/ProductInfo.jsx'
import DropdownBtn from '../../components/DropdownBtn.jsx'
import Wrapper from '../../components/Wrapper.jsx'

import ShopBtn from '../../components/ShopBtn.jsx'
import {HeartIcon, CartIcon} from '../../components/Icons.jsx'

import ShoplyInfo from './Info.jsx'
import Arrivals from './Arrivals.jsx'
import Popular from './Popular.jsx'
import DiscountPage from './DiscountPage.jsx'
import Footer from '../../components/Footer.jsx'

import {Facebook, Instagram, Twitter} from 'react-bootstrap-icons'

import {colorPalettes} from '../../../config'


// bootstrap
import {Container, Row, Col, Form} from 'react-bootstrap'


const Img = styled.img`
	width: 70%;
	bottom: 0;

	@media (max-width: 767px) {
		position: absolute;
		top: 0;
		right: 0;
		width: 100px;
		opacity: 0.7;
	}
`

const Flex = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
`

const BtnWrapper = styled.div`
	margin-top: 4rem;
	display: flex;
	align-items: center;
`

const SocialMedia = styled.div`
	position: fixed;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
`

const PublicHomepage = () => {

	const [mobileWidth, setIsMobile] = useState(window.innerWidth) 
	const [state, setState] = useState({
		color: 'blue',
		size: 'small'
	})

	function handleClickColor(e) {
		setState(prev => ({...prev, color: e.target.id}))
		e.currentTarget.previousSibling.click()
	}

	function handleClickSize(e) {
		setState(prev => ({...prev, size: e.target.id}))
		e.currentTarget.previousSibling.click()
	}

	function handleSubmit(e) {
		e.preventDefault()
	}

	useEffect(() => {
		window.addEventListener('resize', () => setIsMobile(window.innerWidth))
	}, [state, mobileWidth])


	return(
		<MainWrapper>
			<Sidebar />
			<Container fluid>
				<Topbar isLandingPage={true} />

				<SocialMedia>
					<a href="https://fb.com/ronrixlante1" target="_blank" rel="noopener noreferrer"> <Instagram style={{fontSize: '2rem', color: '#8a3ab9', cursor: 'pointer'}} /></a>
					<a href="https://fb.com/ronrixlante1" target="_blank" rel="noopener noreferrer"><Facebook style={{margin: '1rem 0', fontSize: '2rem', color: '#3v5998', cursor: 'pointer'}}/></a>
					<a href="https://twitter.com/medyochain" target="_blank" rel="noopener noreferrer"><Twitter style={{fontSize: '2rem', color: '#00acee', cursor: 'pointer'}}/></a>
				</SocialMedia>

				<Form onSubmit={handleSubmit}>
					<Wrapper>
						<Row><div style={{fontWeight: 'bolder', fontSize: '1.2rem'}}>NEW</div></Row>
						<Row>
							<Col>
								<ProductInfo handleClickSize={handleClickSize} handleClickColor={handleClickColor} 
									info={<div>
											<h3 style={{fontWeight: 'bolder', color: colorPalettes.darkBlue}}>SUMMER 21'</h3>
											<p style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: colorPalettes.darkGray}}>Summer layer season is here. Check out new trendy summer collection, stay on style.</p>
										</div>}
								>
									<BtnWrapper>
										<ShopBtn>Shop Now</ShopBtn>
										<HeartIcon />
										<CartIcon />
									</BtnWrapper>
								</ProductInfo>
							</Col>
							<Col sm={2} md={6}>
								<Img src={'assets/images/Model-PNG.png'} alt="product thumbnail" />
							</Col>
						</Row>
					</Wrapper>

					<Wrapper style={{marginTop: '4rem', maxWidth: '100%'}}>
						<Row>
							<h3 style={{fontWeight: 'bolder', color: colorPalettes.darkBlue}}>Category</h3>
							<Flex>
								{mobileWidth <= 388 ? <DropdownBtn /> : <CategoriesBtn /> }
							</Flex>
						</Row>
						<Row>
							<ProductCard products={[1,1,1,1,1,1]} />
						</Row>
					</Wrapper>

					<ShoplyInfo />
					<Arrivals />
					<Popular />
					<DiscountPage />

					<Footer />
				</Form>
			</Container>
		</MainWrapper>
	)
}

export default PublicHomepage