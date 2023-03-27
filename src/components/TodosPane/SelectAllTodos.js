import React from 'react';
import TodoManager from '../../services/TodoManager';

const SelectAllTodos = (context) => {
	const { actions: { toggleAllStatus }} = context;

	return <div>
		<input
			type="checkbox"
			onChange={ ({ target: { checked }}) => toggleAllStatus(checked) }
			checked={ TodoManager.checkAllStatus(context) }
		/>
		<label>Select All</label></div>;
};

export default SelectAllTodos;
