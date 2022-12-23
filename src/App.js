import './App.scss';
import Header from './components/Header/Header';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
//cách viết class component
// class App extends React.Component {
// 	render() {
// 		return (

// 			<div className='app-container'>
// 				hello world
// 				<MyComponent></MyComponent>
// 			</div>

// 		)
// 	}
// }

//cách viết function component
const App = () => {

	return (
		<div className="app-container">
			<div className='header-container'>
				<Header />

			</div>

			<div className='main-container'>
				<div className='sidenav-container'>

				</div>

				<div className='app-content'>
					<Outlet />
				</div>
			</div>

		</div>

	);
}

export default App;
