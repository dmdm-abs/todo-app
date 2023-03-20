const setCurrentTodo = ({ data }) => ({
	currentTodo: data,
});

const addTodo = ({ state: { currentTodo, todos }},) => ({
	todos: [...todos, currentTodo],
	currentTodo: '',
});
const actions = {
	setCurrentTodo,
	addTodo,
};

export default actions;
