import React, { useEffect } from 'react';
import Task from './Task';

const Tasks = (context) => {
	const {
		state: { tasks },
		config: { taskTimer },
		actions: { addTask },
	} = context;

	useEffect(() => setTimeout(addTask, taskTimer));

	return <div>
		{tasks.map((task, key) =>
			<Task key={ key } { ...{ ...context, data: task } }/>)}
	</div>;
};

export default Tasks;
