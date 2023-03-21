import TodoManager from '../services/TodoManager';

const setCurrentTodo = ({ data }) => ({
	currentTodo: data,
});

const addTodo = (context) => {
	const { state: { todos }} = context;

	return {
		todos: [...todos, TodoManager.createTodo(context)],
		currentTodo: '',
	};
};

const handleChange = (context) => ({
	todos: TodoManager.updateTodos({ ...context }),
});

const actions = {
	setCurrentTodo,
	addTodo,
	handleChange,
};

export default actions;
