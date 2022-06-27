import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import {colorPalettes} from '../../config'

const ShopBtn = styled(Button)`
	padding: 1.2rem;
	border: 2px solid ${colorPalettes.darkBlue} !important;
	color: ${colorPalettes.darkBlue} !important;
	font-weight: bolder;
	display: inline;
	background-color: transparent;

	&:hover {
		color: white !important;
		border: 2px solid white !important;
		background-color: ${colorPalettes.violet};
	}

	@media (max-width: 894px) {
		padding: 0.5rem;
		font-size: .8rem;
	}
`

export default ShopBtn