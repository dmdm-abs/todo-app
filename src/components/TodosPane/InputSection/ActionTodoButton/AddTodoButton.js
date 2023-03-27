import React from 'react';

const AddTodoButton = ({
	actions: { addTodo },
	state: { currentTodo: { text }},
}) =>
	<button
		onClick={ addTodo }
		disabled={ !text }
	> Add</button>;

export default AddTodoButton;
