import React, {useState} from 'react'

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import styled from 'styled-components'

import Authentication from './Pages/authentication/'
import Profile from './Pages/profile/'
import PublicHomepage from './Pages/home/'
import Product from './Pages/product/'
import SearchPage from './Pages/SearchPage/'
import OrderPage from './Admin/OrderPage/'

// context
import {MyContext} from '../contexts/Context.js'

const Wrapper = styled.div`
	background-color: #ededed;
	margin: 0;
	padding: 0;
	font-family: Montserrat, sans-serif;
	box-sizing: border-box;
`

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [modalValue, setModalValue] = useState({value: '', show: false})

	return(
		<MyContext.Provider value={{modalValue, setModalValue}}>
			<Wrapper>
				<Router>
					<Routes>
						<Route exact path="/" element={<PublicHomepage />} />
						<Route exact path="/login" element={<Authentication />} />
						<Route exact path="/app/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
						<Route exact path="/admin/handle-orders" element={<OrderPage />} />
						<Route exact path="/product/:id" element={<Product />} />
						<Route exact path="/search" element={<SearchPage />} />
						<Route path="*" element={<div>page 404 not found</div>} />
					</Routes>
				</Router>
			</Wrapper>
		</MyContext.Provider>
	)
}

export default App