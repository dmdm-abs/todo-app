import TodoManager from '../services/TodoManager';

const setCurrentTodo = ({ data }) => ({
	currentTodo: {
		id: '',
		text: data,
		isCompleted: false,
	},
});

const addTodo = (context) => {
	const { state: { todos }, seed: { currentTodo }} = context;

	return {
		todos: [...todos, TodoManager.createTodo(context)],
		currentTodo: currentTodo,
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

const clearCompletedTodos = (context) => ({
	todos: TodoManager.clearCompletedTodos({ ...context }),
});

const changeSelectedTab = ({ data }) => ({
	selectedTab: data,
});

const actions = {
	setCurrentTodo,
	addTodo,
	changeStatus,
	changeAllStatus,
	removeTodo,
	clearCompletedTodos,
	changeSelectedTab,
};

export default actions;
