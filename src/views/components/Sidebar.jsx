import React, {useState} from 'react'

import styled from 'styled-components'
import {colorPalettes} from '../../config'

const Wrapper = styled.div`
	width: ${props => props.show ? 200 : 50}px;
	background-color: transparent;
	position: relative;

	@media (max-width: 400px) {
		width: 0;
	}
`

const BurgerBtn = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 50px;
	height: 40px;
	position: absolute;
	right: ${props => props.show ? '0' : '-50px'};
	top: 0;
`

const Line = styled.div`
	width: 40px;
	height: 5px;
	background-color: ${colorPalettes.darkBlue};
	border-radius: 30px;

	transition: transform 100ms ease-in;
	display: ${props => props.clicked ? props.second ? 'none' : 'block' : 'block'};
	transform: ${props => props.clicked ? props.first ? 'rotate(40deg) translate(4px, 10px)' : 'rotate(-40deg) translate(2px, -10px)' : ''}
`

const InsideWrapper = styled.div`
	position: fixed;
	left:0;
	top: 0;
	height: 100%;
	z-index: 1000;
	background-color: ${props => props.show ? 'white': 'transparent'};
	width: 200px;
	transform: translateX(${props => props.show ? 0 : -200}px);
	transition: transform 200ms ease-in-out;
`

const ListContainer = styled.ul`
	margin-top: 4rem;
	list-style: none;
	font-weight: bold;
`

const List = styled.li`
	padding: 1rem 0;
	cursor: pointer;
	
	&:hover {
		color: ${colorPalettes.violet};
	}
`

const Sidebar = () => {

	const [showNavs, setShowNavs] = useState(false)

	const handleShowNav = () => {
		setShowNavs(!showNavs)
	}

	return(
		<Wrapper show={showNavs}>
			<InsideWrapper show={showNavs}>
				<BurgerBtn onClick={handleShowNav} show={showNavs}>
					<Line clicked={showNavs} first/>
					<Line clicked={showNavs} second/>
					<Line clicked={showNavs} third/>
				</BurgerBtn>
				<ListContainer>
					<List>Settings</List>
					<List>Profile</List>
					<List>Menu</List>
				</ListContainer>
			</InsideWrapper>
		</Wrapper>
	)
}

export default Sidebar