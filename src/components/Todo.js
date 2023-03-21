import React from 'react';

const Todo = (context) => {
	const { data: { todo }} = context;

	return <div>{todo.text}</div>;
};

export default Todo;
