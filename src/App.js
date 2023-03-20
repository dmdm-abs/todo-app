import { React } from 'react';
import './App.scss';
import Header from './components/Header';
import Body from './components/Body';
const App = (context) =>
	<div className="App">
		<span>Todo-App</span>
		<Header { ...context }/>
		<Body { ...context }/>
	</div>;

export default App;
