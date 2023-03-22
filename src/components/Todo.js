import React from 'react';

const Todo = (context) => {
	const { data, actions: { toggleStatus, editTodo, removeTodo }} = context;
	const { text, isCompleted } = data;

	return (
		<div>
			<input
				type="checkbox"
				checked={ isCompleted }
				onChange={ () => toggleStatus(data) }
			/>
			<span onClick={ () => editTodo(data) }>{text}</span>
			<button onClick={ () => removeTodo(data) }>Delete</button>
		</div>
	);
};

export default Todo;
