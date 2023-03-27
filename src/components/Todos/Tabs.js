import React from 'react';

const Tabs = (context) => {
	const { actions: { changeSelectedTab }} = context;

	return <div>
		<button onClick={ () => changeSelectedTab('all') }>All</button>
		<button onClick={ () => changeSelectedTab('active') }>Active</button>
		<button
			onClick={ () => changeSelectedTab('completed') }
		>Completed</button>
	</div>;
};

export default Tabs;
