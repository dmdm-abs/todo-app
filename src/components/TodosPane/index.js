import React from 'react';
import InputSection from './InputSection';
import Tabs from './Tabs';
import Title from './Title';
import TodoActions from './TodoActions';
import Todos from './Todos';

const TodosPane = (context) =>
	<div>
		<Title/>
		<InputSection { ...context }/>
		<TodoActions { ...context }/>
		<Todos { ...context }/>
		<Tabs { ...context }/>
	</div>;

export default TodosPane;
