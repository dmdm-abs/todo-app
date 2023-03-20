import React from 'react';

const InputBox = ({ actions: { setCurrentTodo }, state: { currentTodo }}) =>
	<input
		type="text"
		value={ currentTodo }
		onChange={ ({ target: { value }}) => setCurrentTodo(value) }
		className="inputBox"
	/>;

export default InputBox;
