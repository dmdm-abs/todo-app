import React from 'react';

const AddTodoButton = ({ actions: { addTodo }, state: { currentTodo }}) =>
	<button
		onClick={ addTodo }
		disabled={ !currentTodo }
	> Add</button>;

export default AddTodoButton;
