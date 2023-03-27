import React from 'react';
import InputSection from './InputSection';
import Tabs from './Tabs';
import TodoActions from './TodoActions';
import Todos from './Todos';

const TodosPane = (context) =>
	<div>
		<h2>Todo-App</h2>
		<InputSection { ...context }/>
		<TodoActions { ...context }/>
		<Todos { ...context }/>
		<Tabs { ...context }/>
	</div>;

export default TodosPane;
