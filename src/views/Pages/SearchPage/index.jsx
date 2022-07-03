import React from 'react'

import {Container} from 'react-bootstrap'
import {useSearchParams} from 'react-router-dom'
import styled from 'styled-components'
import {colorPalettes} from '../../../config'

import MainWrapper from '../../components/MainWrapper.jsx'
import Wrapper from '../../components/Wrapper.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import Topbar from '../../components/Topbar.jsx'
import StarRate from '../../components/StarRate.jsx'
import Button from '../../components/Button.jsx'

const SearchProductCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid ${colorPalettes.darkBlue};
	padding: 1rem;
	margin: .5rem 0;
`
const Title = styled.h4`
	color: ${colorPalettes.darkBlue};
	font-size: 2rem;
	font-weight: bolder;
`
const Img = styled.img`
	width: 10%;
`
const sampleCountOfSearchDefaultView = [1,1,1,1,1]
const SearchPage = () => {

	const [searchParams] = useSearchParams()

	console.log(searchParams.get('pname'))

	return (
		<MainWrapper>
			<Sidebar />
			<Container fluid>
				<Topbar searchPage={true}/>
				<Wrapper>
					{sampleCountOfSearchDefaultView.map((v, idx) => {
						return (
							<SearchProductCard key={idx}>
								<Img src={'/assets/images/Model-PNG.png'} alt="thumnail" />
								<div>
									<Title>SUMMER 21</Title>
									<div>
										<StarRate rate={5} size={0.8} />
										<span>5.0</span>
									</div>
									<h5 style={{fontWeight: 'bolder'}}>Price: Php. 5000</h5>
								</div>
								<div>
									<Button>View</Button>
								</div>
							</SearchProductCard>
						)
					})}
				</Wrapper>
			</Container>
		</MainWrapper>
	)
}

export default SearchPage