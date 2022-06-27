import React, {useState} from 'react'

import styled from 'styled-components'
import {Container} from 'react-bootstrap'
import {CaretRightFill, CaretDownFill} from 'react-bootstrap-icons'

import {colorPalettes} from '../../../config'
import profile from '../../../assets/images/Model-PNG.png'
import product1 from '../../../assets/images/sleevless.png'

import Sidebar from '../../components/Sidebar.jsx'
import Topbar from '../../components/Topbar.jsx'

import MainWrapper from '../../components/MainWrapper.jsx'


const ContentWrapper = styled.div`
	background-color: white;
	width: 100%;
	height: 100vh;
	position: relative;
`

const TopContent = styled.div`
	background-color: ${colorPalettes.darkBlue};
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1rem;
`

const ProfileImgWrapper = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	border: 1px solid white;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`

const Name = styled.h5`
	font-size: 2rem;
	color: ${colorPalettes.white};
	font-weight: bolder;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

const BodyContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
`

const H2 = styled.h2`
	font-weight: bolder;
	font-size: 1.5rem;
`

const Link = styled.a`
	text-decoration: none;
	color: ${colorPalettes.violet};
	font-weight: bold;
`

const H3 = styled.h3`
	font-weight: bold;
	font-size: 1.2rem;
`

const PurchaseBtn = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-left: 130px;

	&:hover {
		background-color: ${colorPalettes.light};
		color: black;
	}
`

const ProductWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 200px;
`

const ProductInfo = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	color: white;
	background-color: rgba(0,0,0, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;

	opacity: 0;
	transtion: opacity 100ms ease-in;
`

const Product = styled.div`
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	overflow: hidden;
	position: relative;
	margin: 0 .5rem;

	& ${ProductInfo}:hover {
		opacity: 1;
	}
`


const Profile = () => {
	const [showPurchases, setShowPurchases] = useState(false)

	function handleShowPurchase() {
		setShowPurchases(!showPurchases)
	}

	return (
		<MainWrapper>
			<Sidebar />
			<Container fluid>
				<Topbar />
				<ContentWrapper>

					<TopContent>
						<ProfileImgWrapper><img src={profile} alt="profile" style={{width: '150px'}}/></ProfileImgWrapper>
						<Wrapper style={{marginLeft: '1rem'}}>
							<Name>Ronrix Lante</Name>
							<p style={{color: 'white', fontWeight: 'bold'}}>ronrixl5@gmail.com</p>
						</Wrapper>
					</TopContent>

					<BodyContent>
						<Wrapper style={{marginLeft: '130px'}}>
							<H2>My Delivery Address</H2>
							<p>Pililla Rizal, 1910</p>
							<p>09189812019289</p>

							<Link href="#">Change</Link>
						</Wrapper>

						<PurchaseBtn onClick={handleShowPurchase}>
							<H3>My Purchases</H3>
							{!showPurchases ? <CaretRightFill /> : <CaretDownFill />}
						</PurchaseBtn>
						<Wrapper style={{transition: 'height 200ms ease-in', marginLeft: '130px', marginTop: '1rem', height: showPurchases ? 'auto' : '0' , overflow: 'hidden'}}>
							<ProductWrapper>
								<Product>
									<ProductInfo>
										<div>Sleevless Shirt</div>
										<div>
											date: 1910 192910
										</div>
									</ProductInfo>
									<img src={product1} alt="product 1" />
								</Product>

								<Product>
									<ProductInfo>
										<div>Sleevless Shirt</div>
										<div>
											date: 1910 192910
										</div>
									</ProductInfo>
									<img src={product1} alt="product 1" />
								</Product>
							</ProductWrapper>
						</Wrapper>
					</BodyContent>

				</ContentWrapper>
			</Container>
		</MainWrapper>
	)
}

export default Profile