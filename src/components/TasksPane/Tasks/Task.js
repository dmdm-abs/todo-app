import React from 'react';

const Task = ({ data, actions: { addTaskAsTodo, removeTask }}) =>
	<div>
		<span>{data.text}</span>
		<button onClick={ () => addTaskAsTodo(data) }>Add</button>
		<button onClick={ () => removeTask(data) }>Remove</button>
	</div>;

export default Task;
