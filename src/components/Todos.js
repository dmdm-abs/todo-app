import { map } from '@laufire/utils/collection';
import React from 'react';
import ClearButton from './ClearButton';
import SelectAllTodos from './SelectAllTodos';
import Todo from './Todo';

const Todos = (context) => {
	const { state: { todos }} = context;

	return (
		<div>
			<SelectAllTodos { ...context }/>
			<ClearButton { ...context }/>
			{map(todos, (todo, key) =>
				<Todo key={ key } { ...{ ...context, data: { todo }} }/>)}
		</div>
	);
};

export default Todos;
