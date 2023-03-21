import React from 'react';
import AddTodoButton from './AddTodoButton';
import InputBox from './InputBox';

const Header = (context) =>
	<div>
		<h2>Todo-App</h2>
		<InputBox { ...context }/>
		<AddTodoButton { ...context }/>
	</div>;

export default Header;
