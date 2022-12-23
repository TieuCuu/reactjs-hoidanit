import './App.scss';
import Header from './components/Header/Header';
import React from 'react';
import { Link } from "react-router-dom";
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
			<div>test link</div>
			<div>
				<button>
					<Link to="/users">go to user page</Link>
				</button>
				<button>
					<Link to="/admin">go to admin page</Link>
				</button>
			</div>
		</div>

	);
}

export default App;
