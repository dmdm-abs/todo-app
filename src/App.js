import { React } from 'react';
import './App.scss';
import Header from './components/Header';
import Todos from './components/Todos';

const App = (context) =>
	<div className="App">
		<h2>Todo-App</h2>
		<Header { ...context }/>
		<Todos { ...context }/>
	</div>;

export default App;
