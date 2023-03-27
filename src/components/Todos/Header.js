import React from 'react';
import ActionTodoButton from './ActionTodoButton';
import InputBox from './InputBox';

const Header = (context) =>
	<div>
		<h2>Todo-App</h2>
		<InputBox { ...context }/>
		<ActionTodoButton { ...context }/>
	</div>;

export default Header;
