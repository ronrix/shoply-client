import React from 'react'

import {ButtonGroup, Button} from 'react-bootstrap'
import styled from 'styled-components'


// images
import polo from '../../assets/images/colored/polo-icon-colored.png'
import dress from '../../assets/images/colored/dress-icon-colored.png'
import socks from '../../assets/images/colored/socks-icon-colored.png'
import shoe from '../../assets/images/colored/shoe-icon-colored.png'
import hat from '../../assets/images/colored/hat-icon-colored.png'
import tops from '../../assets/images/colored/tops-colored.png'


const ImgIcon = styled.img`
	width: 15%;
`

const Btn = styled(Button)`
	font-weight: bold;	
	background-color: white !important;
	color: black !important;

	@media (max-width: 455px) {
		font-size: .8rem;
	}
`

const BtnGrp = styled(ButtonGroup)`
	width: 100%;
	@media (max-width: 400px) {
	}
`

const CategoriesBtn = () => {
	return (
		<>
			<BtnGrp aria-label="categories">
			  <Btn variant="secondary">
			  	<ImgIcon src={polo} alt="polo"/>
			  	Polo </Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={dress} alt="dress"/>
			  	Dress</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={socks} alt="socks"/>
			  	Socks</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={shoe} alt="shoes"/>
			  	Shoes</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={hat} alt="hats" style={{width: '8%'}}/>
			  	Hats</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={tops} alt="tops"/>
			  	Tops</Btn>
			</BtnGrp>
		</>
	)
}

export default CategoriesBtn