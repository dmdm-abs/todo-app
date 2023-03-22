import React from 'react';

const Todo = (context) => {
	const { data, actions: { changeStatus, removeTodo }} = context;
	const { text, isCompleted } = data;

	return (
		<div>
			<input
				type="checkbox"
				checked={ isCompleted }
				onChange={ () => changeStatus(data) }
			/>
			<span>{text}</span>
			<button onClick={ () => removeTodo(data) }>Delete</button>
		</div>
	);
};

export default Todo;
