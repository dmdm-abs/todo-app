import React from 'react';

const Task = (context) => {
	const { data, actions: { addTaskAsTodo }} = context;

	return <div>
		<span>{data.text}</span>
		<button onClick={ () => addTaskAsTodo(data) }>Add</button>
	</div>;
};

export default Task;
