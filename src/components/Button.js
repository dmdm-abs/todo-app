import React from 'react';

const Button = (context) => {
	const { actions: { addTodo }} = context;

	return <button onClick={ () => addTodo() }> Add</button>;
};

export default Button;
