import React from 'react';

const Button = ({ actions: { addTodo }}) =>
	<button onClick={ () => addTodo() }> Add</button>;

export default Button;
