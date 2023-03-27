import React from 'react';
import TodoManager from '../../../services/TodoManager';

const SelectAllTodos = (context) => {
	const { actions: { toggleAllStatus }} = context;

	return <span>
		<input
			type="checkbox"
			onChange={ ({ target: { checked }}) => toggleAllStatus(checked) }
			checked={ TodoManager.checkAllStatus(context) }
		/>
		<label>Select All</label></span>;
};

export default SelectAllTodos;
