import styled from 'styled-components'
import {Heart, Cart} from 'react-bootstrap-icons'

import {colorPalettes} from '../../config'

export const HeartIcon = styled(Heart)`
	cursor: pointer;
	margin: 0 0.8rem;
	font-size: 2rem;
	&:hover {
		color: ${colorPalettes.violet};
	}

	@media (max-width: 894px) {
		font-size: 1.2rem;
	}
`

export const CartIcon = styled(Cart)`
	cursor: pointer;
	font-size: 2rem;
	&:hover {
		color: ${colorPalettes.violet};
	}

	@media (max-width: 894px) {
		font-size: 1.2rem;
	}
`