import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'

import Authentication from './Pages/authentication/'
import Profile from './Pages/profile/'
import LandingPage from './Pages/home/'

const Wrapper = styled.div`
	background-color: #ededed;
	margin: 0;
	padding: 0;
	font-family: Montserrat, sans-serif;
	box-sizing: border-box;
`

const App = () => {
	return(
		<Wrapper>
			<Router>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/login" element={<Authentication />} />
					<Route exact path="/app/profile" element={<Profile />} />
				</Routes>
			</Router>
		</Wrapper>
	)
}

export default App