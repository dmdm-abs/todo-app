import { map } from '@laufire/utils/collection';
import React from 'react';
import TodoManager from '../../services/TodoManager';
import Tabs from './Tabs';
import Todo from './Todo';

const Todos = (context) => {
	const filteredTodos = TodoManager.filterTodos(context);

	return <div>
		{map(filteredTodos, (todo, key) =>
			<Todo key={ key } { ...{ ...context, data: todo } }/>)}
		<Tabs { ...context }/>
	</div>;
};

export default Todos;
