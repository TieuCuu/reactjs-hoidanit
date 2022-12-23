import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Header from './components/Header/Header';
import React from 'react';

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
			<Header />
		</div>

	);
}

export default App;
