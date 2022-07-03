import React from 'react'

import {Dropdown, DropdownButton} from 'react-bootstrap'
import styled from 'styled-components'


const ImgIcon = styled.img`
	width: 20%;
`

const DropdownCat = () => {
	return (
		<DropdownButton title="Categories">
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={'assets/images/polo-icon.png'} alt="polo"/>
			  	Polo
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={'assets/images/dress-icon.png'} alt="dress"/>
			  	Dress
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={'assets/images/socks-icon.png'} alt="socks"/>
			  	Socks
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={'assets/images/shoe-icon.png'} alt="shoes"/>
			  	Shoes
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={'assets/images/hat-icon.png'} alt="hats"/>
			  	Hats
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={'assets/images/tops.png'} alt="tops"/>
			  	Tops
			</Dropdown.Item>
		</DropdownButton>
	)
}

export default DropdownCat