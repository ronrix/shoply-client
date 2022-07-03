import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams, useNavigate} from 'react-router-dom'

import {Container, Form} from 'react-bootstrap'
import MainWrapper from '../../components/MainWrapper.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import Topbar from '../../components/Topbar.jsx'
import Wrapper from '../../components/Wrapper.jsx'
import Button from '../../components/Button.jsx'
import StarRate from '../../components/StarRate.jsx'
import Footer from '../../components/Footer.jsx'

import ProductImg from './ProductImg.jsx'
import Details from './Details.jsx'

import {Cart} from 'react-bootstrap-icons'

import {colorPalettes} from '../../../config'

const Flex = styled.div`
	display: flex;
	width: 100%;
	position: relative;

	@media (max-width: 630px) {
		flex-direction: column;
	}
`

const BackBtn = styled.div`
	font-weight: bolder;
	font-size: 1.5rem;
	margin: 1rem;
	margin-right: 2rem;
	cursor: pointer;

	&:hover {
		color: ${colorPalettes.violet};
	}

	@media (max-width: 828px) {
		position: absolute;
		left: 10px;
		top: 0;
		z-index: 100;
	}
`

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 3;
	padding: 1.5rem;
`


const Review = styled.div`
	background-color: ${colorPalettes.darkGray};
	flex: 1;
	color: white;
`

const OverrideWrapper = styled(Wrapper)`
	@media (max-width: 828px) {
		flex-direction: column;
	} 
`

const Product = () => {

	const history = useNavigate()

	const {id} = useParams()
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

	useEffect(() => {
		console.log(state, id)
	}, [id, state])


	return (
		<MainWrapper>
			<Sidebar />
			<Container fluid>
				<Topbar />

				<Form>
					<Flex>
						<div>
							<BackBtn onClick={() => history(-1)}>BACK</BackBtn>
						</div>
						<OverrideWrapper style={{display: 'flex'}}>
							<ProductImg />

							<FlexCol>
								<div>
									<h3 style={{fontWeight: 'bolder', fontSize: '1.8rem'}}>Sharpee Set of Men Style Fashion</h3>
									<p style={{display: 'flex'}}>
										<StarRate rate={2} size={1} /> 
										<span style={{marginLeft: '.3rem'}}>3.0</span>
									</p>
								</div>

								<Flex>
									<Details handleClickColor={handleClickColor} handleClickSize={handleClickSize} />

									<Review>review</Review>
								</Flex>

								<h4 style={{fontWeight: 'bolder', margin: '1rem 0'}}>Price : Php. 2,500</h4>

								<div style={{alignSelf	: 'flex-end'}}>
									<Button 
									style={{
										backgroundColor: colorPalettes.light, 
										color: colorPalettes.darkBlue, 
										margin: '0.5rem .5rem',
									}}>
										<Cart style={{color: colorPalettes.darkBlue, marginRight: '.2rem'}}/>
										<span style={{fontSize: '0.9rem'}}>Add To Cart</span>
									</Button>
									<Button>Buy Now</Button>
								</div>
							</FlexCol>
						</OverrideWrapper>
					</Flex>
				</Form>
				<Footer />
			</Container>
		</MainWrapper>
	)
}

export default Product