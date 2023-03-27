import React from 'react';

const EditTodoButton = ({
	actions: { updateTodo },
	state: { currentTodo: { text }},
}) =>
	<button
		onClick={ updateTodo }
		disabled={ !text }
	> Edit</button>;

export default EditTodoButton;
