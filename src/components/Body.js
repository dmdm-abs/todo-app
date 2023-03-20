import React from 'react';

const Body = (context) => {
	const { state: { todos }} = context;

	return (
		<div>{todos.map((todo) => todo)}</div>
	);
};

export default Body;
