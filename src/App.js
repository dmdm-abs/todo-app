import { React } from 'react';
import './App.scss';
import Todos from './components/Todos';

const App = (context) =>
	<div className="App">
		<Todos { ...context }/>
	</div>;

export default App;
