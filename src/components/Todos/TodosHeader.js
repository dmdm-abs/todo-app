import React from 'react';
import ActionTodoButton from './ActionTodoButton';
import InputBox from './InputBox';
import Todos from './Todos';

const TodosHeader = (context) =>
	<div>
		<h2>Todo-App</h2>
		<InputBox { ...context }/>
		<ActionTodoButton { ...context }/>
		<div>
			<Todos { ...context }/>
		</div>
	</div>;

export default TodosHeader;
