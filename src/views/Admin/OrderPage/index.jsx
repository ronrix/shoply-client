import React from 'react'
import { Container, Col } from 'react-bootstrap'
import styled from 'styled-components'

import { colorPalettes } from '../../../config'

import MainWrapper from '../../components/MainWrapper'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import Topbar from '../../components/Topbar'

import CardCart from './Card'
import Navigation from './Navigation'


const Flex = styled.div`
	display: flex;
`


const OrderPage = () => {

	return (
		<MainWrapper style={{minHeight: '100vh'}}>
			<Sidebar />
			<Container fluid>
				<Topbar />
					<Flex>
						<Col style={{flex: 0.7}}>	
							<Navigation />
						</Col>

						<Col style={{flex: 2}}>

							<Wrapper>
								<h5 style={{fontWeight: 'bolder'}}>New Orders</h5>
								<CardCart />
							</Wrapper>


						</Col>
					</Flex>
			</Container>
		</MainWrapper>
	)
}

export default OrderPage