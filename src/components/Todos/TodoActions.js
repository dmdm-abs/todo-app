import React from 'react';
import ClearButton from './ClearButton';
import SelectAllTodos from './SelectAllTodos';

const TodoActions = (context) =>
	<div>
		<SelectAllTodos { ...context }/>
		<ClearButton { ...context }/>
	</div>;

export default TodoActions;
