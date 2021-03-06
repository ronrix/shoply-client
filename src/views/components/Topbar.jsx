import React, {useState} from 'react'

import styled from 'styled-components'
import {Search, Person, Cart} from 'react-bootstrap-icons'

import {Link} from 'react-router-dom'
import NButton from './Button.jsx'

import {colorPalettes} from '../../config'

const Title = styled.h1`
	font-weight: bolder;
	font-family: Montserrat, sans-serif;
	font-size: 2rem;
	cursor: pointer;

	@media(max-width: 714px) {
		font-size: 1.5rem;
		margin-left: 3rem;
	}
`

const MainWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: .5rem;
	padding-left: 1rem;
	position: relative;
`

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`

const InputWrapper = styled.div`
	width: 400px;
	overflow: hidden;
	border-radius: 30px;

	@media (max-width: 416px) {
		position: absolute;
		left: 40px;
		bottom: 5px;	
		width: 170px;
	}
	@media(max-width: 388px) {
		width: 150px;
	}
`

const Input = styled.input`
	padding: .5rem;
	color: ${colorPalettes.darkGray};
	width: 100%;
	background-color: white;
	border: 1px solid ${colorPalettes.darkGray};
	outline: none;
	border-radius: 30px;

	&:focus {
		border: 2px solid ${colorPalettes.violet};
	}

	transition: transform 300ms ease-in;
	transform: ${props => props.search ? 'translateX(0)': 'translateX(500px)'};

	@media (max-width: 612px) {
		
	}
`

const SearchIcon = styled(Search)`
	font-size: 1.7rem;
	cursor: pointer;
	text-decoration: none;

	&:hover{
		color: ${colorPalettes.violet};
	}
`

const CartIcon = styled(Cart)`
	font-size: 1.7rem;
	cursor: pointer;
	text-decoration: none;

	&:hover{
		color: ${colorPalettes.violet};
	}
`
const PersonIcon = styled(Person)`
	font-size: 1.7rem;
	cursor: pointer;

	&:hover{
		color: ${colorPalettes.violet};
	}
`

const Topbar = ({searchPage, isLandingPage}) => {

	const [isSearch, setIsSearch] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const handleIsSearch = () => {
		setIsSearch(!isSearch)
	}

	const handleSearchInput = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<MainWrapper>
			<Link to="/" style={{textDecoration: 'none', color: colorPalettes.darkBlue}}><Title>Shoply.</Title></Link>
			<InputWrapper>
				<Input type="text" placeholder="Type in here...." search={searchPage ? true : isSearch} value={searchValue} onChange={handleSearchInput}/>
			</InputWrapper>
			<Div>
				<SearchIcon onClick={handleIsSearch}/>
				<Link to="/app/cart" style={{textDecoration: 'none', color: 'black'}}> <CartIcon /> </Link>
				{isLandingPage ? (
					<Link to='/login'>
						<NButton style={{marginLeft: '1rem'}}>Login</NButton>
					</Link>)
					 : <Link to="/app/profile" style={{textDecoration: 'none', color: 'black'}}><PersonIcon /></Link> }
			</Div>
		</MainWrapper>
	)
}

export default Topbar