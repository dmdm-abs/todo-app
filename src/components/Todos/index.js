import React from 'react';
import InputSection from './InputSection';
import Todos from './Todos';

const TodosHeader = (context) =>
	<div>
		<h2>Todo-App</h2>
		<InputSection { ...context }/>
		<Todos { ...context }/>
	</div>;

export default TodosHeader;
