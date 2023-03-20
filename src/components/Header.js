import React from 'react';
import AddTodoButton from './AddTodoButton';
import InputBox from './InputBox';

const Header = (context) =>
	<div>
		<InputBox { ...context }/>
		<AddTodoButton { ...context }/>
	</div>;

export default Header;
