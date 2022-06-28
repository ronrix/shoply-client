import React from 'react'
import styled from 'styled-components'

import {colorPalettes} from '../../config'


const Text = styled.div``

const Footer = () => {
	return (
		<div style={{marginTop: '3rem'}}>
			<Text style={{fontSize: '1.3rem', fontWeight: 'bolder', color: colorPalettes.darkBlue}}>Shoply.</Text>
			<Text copyright style={{fontWeight: 'bold', color: colorPalettes.darkGray, fontSize: '0.8rem'}}>Copyright &copy; 2022 Developed by Ronrix M. Lante</Text>
		</div>
	)
}

export default Footer