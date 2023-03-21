import { map } from '@laufire/utils/collection';
import React from 'react';
import Todo from './Todo';

const Todos = (context) => {
	const { state: { todos }, actions: { changeAllStatus }} = context;

	return (
		<div>
			<input
				type="checkbox"
				onChange={ ({ target: { checked }}) =>
					changeAllStatus(checked) }
				// checked={ checkAllStatus }
			/>
			{map(todos, (todo, key) =>
				<Todo key={ key } { ...{ ...context, data: { todo }} }/>)}
		</div>
	);
};

export default Todos;
