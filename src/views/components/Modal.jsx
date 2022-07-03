import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import {MyContext} from '../../contexts/Context.js'

import styled from 'styled-components'

const ModalWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	color: white;
	background-color: rgba(0,0,0,0.6);
	overflow: hidden;
	z-index: 2000;
`

const Img = styled.img`
	cursor: ${props => props.zoomout ? 'zoom-out' : 'zoom-in' };
	width: ${props => props.zoomin+'%'};
`

const modal = document.getElementById('modal')

const ModalComponent = () => {

	const [zoomIn, setZoomIn] = useState(40)
	const [zoomOut, setZoomOut] = useState(false)

	const {modalValue, setModalValue} = React.useContext(MyContext)

	// handle zoom cursor
	window.addEventListener('keydown', (e) => {
		if(e.altKey) {
			setZoomOut(true)
		}
	})
	window.addEventListener('keyup', (e) => {
		setZoomOut(false)
	})

	useEffect(() => {
		document.body.style.overflowY = 'hidden'
	}, [modalValue])

	function handleZoomInImg(e) {
		e.stopPropagation()
		if(e.altKey) {
			setZoomIn(zoomIn - 10)
			return
		}
		setZoomIn(zoomIn + 10)
	}

	function handleOutOfZoom(e) {
		e.stopPropagation()
		document.body.style.overflowY = 'auto'
		setModalValue({...modalValue, show: false})
	}

	return (
		<ModalWrapper onClick={handleOutOfZoom}>
			<Img src={modalValue.value} alt="product thumbnail" onClick={handleZoomInImg} zoomin={zoomIn} zoomout={zoomOut}/>
		</ModalWrapper>
	)
}

const Modal = () => ReactDOM.createPortal(<ModalComponent />, modal)



export default Modal