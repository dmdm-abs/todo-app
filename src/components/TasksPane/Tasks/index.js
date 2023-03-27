import React from 'react';
import Task from './Task';

const Tasks = (context) => {
	const { state: { tasks }} = context;

	return <div>
		{tasks.map((task, key) =>
			<Task key={ key } { ...{ ...context, data: task } }/>)}
	</div>;
};

export default Tasks;
