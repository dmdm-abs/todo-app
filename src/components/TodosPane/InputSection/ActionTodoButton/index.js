import React from 'react';
import AddTodoButton from './AddTodoButton';
import EditTodoButton from './EditTodoButton';

const ActionTodoButton = (context) => {
	const { state: { currentTodo: { id }}} = context;

	return id
		? <EditTodoButton { ...context }/>
		: <AddTodoButton { ...context }/>;
};

export default ActionTodoButton;
