import TaskManager from '../services/TaskManager';
import TodoManager from '../services/TodoManager';

const setCurrentTodo = ({ state: { currentTodo }, data }) => ({
	currentTodo: { ...currentTodo, text: data },
});

const addTodo = (context) => {
	const { state: { todos }, seed: { currentTodo }} = context;

	return {
		todos: [...todos, TodoManager.createTodo(context)],
		currentTodo: currentTodo,
	};
};

const updateTodo = (context) => {
	const { seed: { currentTodo }} = context;

	return {
		todos: TodoManager.updateTodo(context),
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

const addTask = (context) => {
	const { state: { tasks }, config: { taskLength }} = context;

	return {
		tasks: tasks.length < taskLength
			? [...tasks, TaskManager.createTask(context)]
			: [...tasks],
	};
};

const addTaskAsTodo = (context) => {
	const { state: { todos }, data } = context;

	return {
		todos: [...todos, { ...data, isCompleted: false }],
		tasks: TaskManager.removeTask({ ...context }),
	};
};

const removeTask = (context) => ({
	tasks: TaskManager.removeTask({ ...context }),
});

const actions = {
	setCurrentTodo,
	addTodo,
	updateTodo,
	toggleStatus,
	toggleAllStatus,
	editTodo,
	removeTodo,
	clearCompletedTodos,
	changeSelectedTab,
	addTask,
	addTaskAsTodo,
	removeTask,
};

export default actions;
