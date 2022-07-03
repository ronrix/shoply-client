import React from 'react'
import styled from 'styled-components'

import {colorPalettes} from '../../../config'

const ListWrapper = styled.ul`
	list-style: none;
`

const List = styled.a`
	text-decoration: none;
	color: ${colorPalettes.darkGray};
	font-weight: bolder;
	
	&:hover {
		color: ${colorPalettes.violet};
	}
`

const Navigation = () =>{
	return (
		<ListWrapper>
			<li>
				<List href="#">Orders and Fulfilling</List>
			</li>
			<li>
				<List href="#">Manage Products</List>
			</li>
			<li>
				<List href="#">Track Inventory</List>
			</li>
		</ListWrapper>
	)
}

export default Navigation