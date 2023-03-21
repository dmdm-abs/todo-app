import { map } from '@laufire/utils/collection';
import React from 'react';
import TodoManager from '../services/TodoManager';
import ClearButton from './ClearButton';
import SelectAllTodos from './SelectAllTodos';
import Todo from './Todo';

const Todos = (context) => {
	const { actions: { changeSelectedTab }} = context;

	return <div>
		<SelectAllTodos { ...context }/>
		<ClearButton { ...context }/>
		{map(TodoManager.filterTodos(context), (todo, key) =>
			<Todo key={ key } { ...{ ...context, data: { todo }} }/>)}
		<button onClick={ () => changeSelectedTab('all') }>All</button>
		<button onClick={ () => changeSelectedTab('active') }>Active</button>
		<button
			onClick={ () => changeSelectedTab('completed') }
		>completed</button>
	</div>;
};

export default Todos;
