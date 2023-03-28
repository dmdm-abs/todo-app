import React from 'react';

const Task = (context) => {
	const { data, actions: { addTaskAsTodo, removeTask }} = context;

	return <div>
		<span>{data.text}</span>
		<button onClick={ () => addTaskAsTodo(data) }>Add</button>
		<button onClick={ () => removeTask(data) }>Remove</button>
	</div>;
};

export default Task;
