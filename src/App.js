import { React } from 'react';
import './App.scss';
import TodosPane from './components/TodosPane';

const App = (context) =>
	<div className="App">
		<TodosPane { ...context }/>
	</div>;

export default App;
