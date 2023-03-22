import React from 'react';

const EditTodoButton = ({	actions: { updateTodo }}) =>
	<button onClick={ updateTodo }> Edit</button>;

export default EditTodoButton;
