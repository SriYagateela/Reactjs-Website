import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Mycart from './cart';
import Manageproduct from './manageproduct';
import Myorder from './order';
import Account from './account';

function App(){
	return( 
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route exact path="/cart" element={<Mycart/>} />
				<Route exact path="/myproduct" element={<Manageproduct/>} />
				<Route exact path="/order" element={<Myorder/>} />
				<Route exact path="/account" element={<Account/>} />
			</Routes>
		</HashRouter>
	)
}

export default App;
