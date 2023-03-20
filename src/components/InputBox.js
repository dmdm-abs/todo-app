import React from 'react';

const InputBox = ({ actions: { setValue }, state: { currentTodo }}) =>
	<input
		type="text"
		value={ currentTodo }
		onChange={ ({ target: { value }}) => setValue(value) }
		className="inputBox"
	/>;

export default InputBox;
