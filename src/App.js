import { React } from 'react';
import './App.scss';
import TodosHeader from './components/Todos/TodosHeader';

const App = (context) =>
	<div className="App">
		<TodosHeader { ...context }/>
	</div>;

export default App;
