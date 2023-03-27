import React from 'react';

const Task = (context) => {
	const { data } = context;

	return <div>
		<span>{data}</span>
		<button>Add</button>
	</div>;
};

export default Task;
