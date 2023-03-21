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

const changeStatus = (context) => ({
	todos: TodoManager.changeStatus({ ...context }),
});

const changeAllStatus = (context) => ({
	todos: TodoManager.changeAllStatus({ ...context }),
});

const removeTodo = (context) => ({
	todos: TodoManager.removeTodo({ ...context }),
});

const clearTodos = (context) => ({
	todos: TodoManager.clearTodos({ ...context }),
});

const actions = {
	setCurrentTodo,
	addTodo,
	changeStatus,
	changeAllStatus,
	removeTodo,
	clearTodos,
};

export default actions;
