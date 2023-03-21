import React from 'react';

const ClearButton = ({ actions: { clearCompletedTodos }}) =>
	<button onClick={ clearCompletedTodos }>clear</button>;

export default ClearButton;
