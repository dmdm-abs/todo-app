import { peek } from '@laufire/utils/debug';
import React from 'react';

const Todo = (context) => {
	const { data: { todo }} = peek(context, 'todo');

	return <div>{todo}</div>;
}
	;

export default Todo;
