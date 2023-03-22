import React from 'react';

const InputBox = ({
	actions: { setCurrentTodo },
	state: { currentTodo: { text }},
}) =>
	<input
		type="text"
		value={ text }
		onChange={ ({ target: { value }}) => setCurrentTodo(value) }
		className="inputBox"
	/>;

export default InputBox;
