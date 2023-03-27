import React from 'react';
import Tasks from './Tasks';
import Title from './Title';

const TasksPane = (context) =>
	<div>
		<Title/>
		<Tasks { ...context }/>
	</div>;

export default TasksPane;
