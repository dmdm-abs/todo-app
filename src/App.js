import { React } from 'react';
import './App.scss';
import { peek } from '@laufire/utils/debug';
import Header from './components/Header';
import Body from './components/Body';
const App = (context) => {
	const { state } = context;

	peek(state);

	return <div className="App">
		<Header { ...context }/>
		<Body { ...context }/>
	</div>;
};

export default App;
