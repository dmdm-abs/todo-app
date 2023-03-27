import React from 'react';

const Task = (context) => {
	const { data: { text }} = context;

	return <div>
		<span>{text}</span>
		<button>Add</button>
	</div>;
};

export default Task;
