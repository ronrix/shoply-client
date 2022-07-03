import React from 'react'

import styled from 'styled-components'
import {Form, Button} from 'react-bootstrap'
import {Google} from 'react-bootstrap-icons'

import {colorPalettes} from '../../../config'

const MainWrapper = styled.div`
	display: flex;
	height: 100vh;
	box-sizing: border-box;
`

const LeftSide = styled.div`
	flex: 1;
	background-color: white;
	padding: 4rem;

	@media(max-width: 888px) {
		padding: 4rem 8rem;
	}

	@media(max-width: 650px) {
		padding: 4rem 3rem;
	}
`
const RightSide = styled.div`
	flex: 1;
	padding: 4rem;
	position: relative;
	height: 100vh;

	@media(max-width: 888px) {
		display: none;
	}
`
const GoogleBtn = styled.button`
	width: 100%;
	border-radius: 30px;
	border: none;
	outline: none;
	background-color: transparent;
	padding: .5rem;
	border: 2px solid ${colorPalettes.light};
	transition: background-color 100ms ease-in;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: ${colorPalettes.violet};
		color: white;
	}
`

const LineText = styled.div`
	position: absolute;
	background-color: white;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: ${colorPalettes.darkGray}
`

const Link = styled.a`
	text-decoration: none;
	color: ${colorPalettes.violet};
	font-weight: bold;
`

const LoginButton = styled(Button)`
	border-radius: 30px;
	background-color: ${colorPalettes.violet};
	font-weight: bolder;
`

const Img = styled.img`
	position: absolute;
	${props => props.one ? 'right: 20px; top: 100px' : 'left: 20px; bottom: 20px; opacity: 0.7'}
`

const Authentication = () => {
	return (
		<MainWrapper>
			<LeftSide>
				<h2 style={{fontWeight: 'bolder'}}>Login</h2>
				<Form>
					<Form.Group>
						<GoogleBtn><Google style={{marginRight: '1rem', color: colorPalettes.violet}}/> Sign in with Google</GoogleBtn>
					</Form.Group>

					<Form.Group style={{position: 'relative'}}>
						<hr/>
						<LineText>or sign in with</LineText>
					</Form.Group>

					<Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
					    <Form.Label style={{fontWeight: 'bold'}}>Email</Form.Label>
					    <Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
					    <Form.Label style={{fontWeight: 'bold'}}>Password</Form.Label>
					    <Form.Control type="password" placeholder="Password" />
					  </Form.Group>
					<Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
					    <Form.Check type="checkbox" label="Remember me" />
					    <Link href="#">Forgot password?</Link>
					</Form.Group>

					<LoginButton variant="primary" type="submit" className="w-100 mt-2">
					    Login
					</LoginButton>

					<Form.Group>
						<Form.Text className="text-muted">Not registered yet? <Link href="#">Create an Account</Link></Form.Text>
					</Form.Group>
				</Form>
			</LeftSide>

			<RightSide>
				<h2 style={{fontWeight: 'bolder'}}>Shop Now!</h2>

				<div>
					<Img one src={'assets/images/share-1.png'} alt="first one"/>
					<Img src={'assets/images/share-2.png'} alt="second one"/>
				</div>
			</RightSide>
		</MainWrapper>
	)
}

export default Authentication