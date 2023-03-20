import React from 'react';

const InputBox = (context) => {
	const { actions: { setValue }, state: { currentTodo }} = context;

	return (
		<input
			type="text"
			value={ currentTodo }
			onChange={ ({ target: { value }}) => setValue(value) }
			className="inputBox"
		/>);
};

export default InputBox;
