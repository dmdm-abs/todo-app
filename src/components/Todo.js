import React from 'react';

const Todo = (context) => {
	const {
		data: { todo: { text, id, isCompleted }},
		actions: { handleChange },
	} = context;

	return (
		<div>
			<input
				type="checkbox"
				checked={ isCompleted }
				onChange={ () => handleChange(id) }
			/>
			<span>{text}</span>
			<button>Clear</button>
		</div>
	);
};

export default Todo;
