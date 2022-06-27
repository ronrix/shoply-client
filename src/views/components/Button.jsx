import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import {colorPalettes} from '../../config'

const NButton = styled(Button)`
	background-color: ${colorPalettes.darkBlue};
	padding: .4rem;
	color: white;
	font-weight: bold;
	border: none;
	outline: none;

	&:hover {
		background-color: ${colorPalettes.violet};
	}
`

export default NButton