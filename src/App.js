import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponents.js';
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
	const count = useSelector(state => state.counter.count);
	const dispatch = useDispatch();

	return (
		<div className="app-container">
			hello world

		</div>



	);
}

export default App;
