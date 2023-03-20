import { map } from '@laufire/utils/collection';
import React from 'react';
import Todo from './Todo';

const Todos = (context) => {
	const { state: { todos }} = context;

	return (
		<div>{map(todos, (todo, key) =>
			<Todo key={ key } { ...{ ...context, data: { todo }} }/>)}
		</div>
	);
};

export default Todos;
