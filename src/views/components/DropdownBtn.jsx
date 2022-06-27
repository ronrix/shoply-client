import React from 'react'

import {Dropdown, DropdownButton} from 'react-bootstrap'
import styled from 'styled-components'

// images
import polo from '../../assets/images/polo-icon.png'
import dress from '../../assets/images/dress-icon.png'
import socks from '../../assets/images/socks-icon.png'
import shoe from '../../assets/images/shoe-icon.png'
import hat from '../../assets/images/hat-icon.png'
import tops from '../../assets/images/tops.png'

const ImgIcon = styled.img`
	width: 20%;
`

const DropdownCat = () => {
	return (
		<DropdownButton title="Categories">
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={polo} alt="polo"/>
			  	Polo
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={dress} alt="dress"/>
			  	Dress
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={socks} alt="socks"/>
			  	Socks
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={shoe} alt="shoes"/>
			  	Shoes
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={hat} alt="hats"/>
			  	Hats
			</Dropdown.Item>
		    <Dropdown.Item href="#/action-1">
			    <ImgIcon src={tops} alt="tops"/>
			  	Tops
			</Dropdown.Item>
		</DropdownButton>
	)
}

export default DropdownCat