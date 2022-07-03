import React, {useEffect} from 'react'

import {colorPalettes} from '../../../config'
import styled from 'styled-components'

import Modal from '../../components/Modal.jsx'
import {MyContext} from '../../../contexts/Context.js'

const Img = styled.img`
	position: absolute; 
	left: -100px; top: 50%; 
	transform: translateY(-50%); 
	width: 20rem; 
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	@media (max-width: 1000px) {
		width: 15rem;
	}

	@media (max-width: 828px) {
		position: static;
		left: 0;
		transform: translateY(0)
	}
`

const ImgWrapper = styled.div`

	display: flex;
	justify-content: center;

	flex: 1;

	@media (max-width: 1000px) {
		flex: 0.7;
	}

	@media (max-width: 828px) {
		flex: 1;
		background-color: ${colorPalettes.light};
	}
`

const sampleImg = '/assets/images/set-of-shoes.png'

const ProductImg = () => {
	const {modalValue, setModalValue} = React.useContext(MyContext)

	function handleZoomImg(e) {
		e.stopPropagation()
		setModalValue({value: sampleImg, show: true})
		console.log('zooming out')
	}

	useEffect(() => {
		console.log('zooming')
	}, [modalValue])

	return (
		<>
			{modalValue.show && <Modal />}
			<ImgWrapper onClick={handleZoomImg}>
				<Img src={sampleImg} alt="produdct thumbnail" />
			</ImgWrapper>
		</>
	)	
}

export default ProductImg