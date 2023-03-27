import { React } from 'react';
import './App.scss';
import TasksPane from './components/TasksPane';
import TodosPane from './components/TodosPane';

const App = (context) =>
	<div className="App">
		<TodosPane { ...context }/>
		<TasksPane { ...context }/>
	</div>;

export default App;
