import React from 'react';

const ClearButton = ({ actions: { clearTodos }}) =>
	<button onClick={ clearTodos }>clear</button>;

export default ClearButton;
