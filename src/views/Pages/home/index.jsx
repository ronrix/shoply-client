import React, {useState, useEffect} from 'react'

import styled from 'styled-components'

// components
import Sidebar from '../../components/Sidebar.jsx'
import Topbar from '../../components/Topbar.jsx'
import MainWrapper from '../../components/MainWrapper.jsx'
import ProductsCarousel from '../../components/ProductsCarousel.jsx'
import CategoriesBtn from '../../components/CategoriesBtn.jsx'
import ProductInfo from '../../components/ProductInfo.jsx'
import DropdownBtn from '../../components/DropdownBtn.jsx'
import Wrapper from '../../components/Wrapper.jsx'

import ShoplyInfo from './Info.jsx'
import Arrivals from './Arrivals.jsx'
import Popular from './Popular.jsx'

import {colorPalettes} from '../../../config'

// images
import thumbnail from '../../../assets/images/Model-PNG.png'

// bootstrap
import {Container, Row, Col, Form} from 'react-bootstrap'


const Img = styled.img`
	width: 70%;

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


const LandingPage = () => {

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

				<Form onSubmit={handleSubmit}>
					<Wrapper>
						<Row><div style={{fontWeight: 'bolder', fontSize: '1.2rem'}}>NEW</div></Row>
						<Row>
							<Col>
								<ProductInfo handleClickSize={handleClickSize} handleClickColor={handleClickColor} />
							</Col>
							<Col sm={2} md={6}>
								<Img src={thumbnail} alt="product thumbnail" />
							</Col>
						</Row>
					</Wrapper>

					<Wrapper style={{marginTop: '1rem'}}>
						<Row>
							<h3 style={{fontWeight: 'bolder', color: colorPalettes.darkBlue}}>Category</h3>
							<Flex>
								{mobileWidth <= 388 ? <DropdownBtn /> : <CategoriesBtn /> }
							</Flex>
						</Row>
						<Row>
							<ProductsCarousel />
						</Row>
					</Wrapper>

					<ShoplyInfo />
					<Arrivals />
					<Popular />
				</Form>
			</Container>
		</MainWrapper>
	)
}

export default LandingPage