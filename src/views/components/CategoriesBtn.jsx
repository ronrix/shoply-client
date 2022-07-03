import React from 'react'

import {ButtonGroup, Button} from 'react-bootstrap'
import styled from 'styled-components'


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
			  	<ImgIcon src={'assets/images/colored/polo-icon-colored.png'} alt="polo"/>
			  	Polo </Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={'assets/images/colored/dress-icon-colored.png'} alt="dress"/>
			  	Dress</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={'assets/images/colored/socks-icon-colored.png'} alt="socks"/>
			  	Socks</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={'assets/images/colored/shoe-icon-colored.png'} alt="shoes"/>
			  	Shoes</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={'assets/images/colored/hat-icon-colored.png'} alt="hats" style={{width: '8%'}}/>
			  	Hats</Btn>
			  <Btn variant="secondary">
			  	<ImgIcon src={'assets/images/colored/tops-colored.png'} alt="tops"/>
			  	Tops</Btn>
			</BtnGrp>
		</>
	)
}

export default CategoriesBtn