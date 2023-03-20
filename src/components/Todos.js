import React from 'react';

const Todos = (context) => {
	const { state: { todos }} = context;

	return (
		<div>{todos.map((todo, key) => <div key={ key }>{todo}</div>)}</div>
	);
};

export default Todos;
