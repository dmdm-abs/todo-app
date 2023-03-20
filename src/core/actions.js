const setValue = ({ data }) => ({
	currentTodo: data,
});

const addTodo = ({ state: { currentTodo, todos }},) => ({
	todos: [...todos, currentTodo],
	currentTodo: '',
});
const actions = {
	setValue,
	addTodo,
};

export default actions;
