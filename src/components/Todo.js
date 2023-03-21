import React from 'react';

const Todo = (context) => {
	const {
		data: { todo: { text, id, isCompleted }},
		actions: { changeStatus, removeTodo },
	} = context;

	return (
		<div>
			<input
				type="checkbox"
				checked={ isCompleted }
				onChange={ () => changeStatus(id) }
			/>
			<span>{text}</span>
			<button onClick={ () => removeTodo(id) }>Delete</button>
		</div>
	);
};

export default Todo;
