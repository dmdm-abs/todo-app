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

const toggleStatus = (context) => ({
	todos: TodoManager.toggleStatus({ ...context }),
});

const toggleAllStatus = (context) => ({
	todos: TodoManager.toggleAllStatus({ ...context }),
});

const editTodo = ({ data }) => ({
	currentTodo: data,
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
	toggleStatus,
	toggleAllStatus,
	editTodo,
	removeTodo,
	clearCompletedTodos,
	changeSelectedTab,
};

export default actions;
