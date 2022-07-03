import React from 'react'

import {Star} from 'react-bootstrap-icons'

const StarRate = ({rate, size}) => {

	const stars = []
	for(let i=0; i<5; i++) {
		stars.push(<Star key={i} style={{fontSize: `${size}rem`, color: i<rate ? 'yellow' : 'black'}}/>)
	}

	return (
		<>
			{stars}
		</>
	)
}

export default StarRate