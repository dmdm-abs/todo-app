import React from 'react';
import TodoManager from '../services/TodoManager';

const SelectAllTodos = (context) => {
	const { actions: { changeAllStatus }} = context;

	return <div>
		<input
			type="checkbox"
			name="Select All"
			onChange={ ({ target: { checked }}) => changeAllStatus(checked) }
			checked={ TodoManager.checkAllStatus(context) }
		/>
		<label id="Select All">Select All</label></div>;
};

export default SelectAllTodos;
