import React from 'react';
import ActionTodoButton from './ActionTodoButton';
import InputBox from './InputBox';

const InputSection = (context) =>
	<div>
		<InputBox { ...context }/>
		<ActionTodoButton { ...context }/>
	</div>;

export default InputSection;
