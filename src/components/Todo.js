import React from 'react';

const Todo = (context) => {
	const {
		data: { todo: { text, id, isCompleted }},
		actions: { handleChange, removeTodo },
	} = context;

	return (
		<div>
			<input
				type="checkbox"
				checked={ isCompleted }
				onChange={ () => handleChange(id) }
			/>
			<span>{text}</span>
			<button onClick={ () => removeTodo(id) }>Delete</button>
		</div>
	);
};

export default Todo;
