import { map } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const createTodo = ({ state: { currentTodo: { text }},
	config: { idLength }}) => ({
	id: rndString(idLength),
	text: text,
	isCompleted: false,
});

const updateTodo = (context) => {
	const { state: { currentTodo, todos }} = context;

	return map(todos, (todo) =>
		(currentTodo.id === todo.id ? currentTodo : todo));
};

const toggleStatus = ({ state: { todos }, data: { id: targetId }}) =>
	map(todos, (todo) => {
		const { id, isCompleted } = todo;

		return {
			...todo,
			isCompleted: id === targetId ? !isCompleted : isCompleted,
		};
	});

const toggleAllStatus = ({ state: { todos }, data: status }) =>
	map(todos, (todo) => ({
		...todo,
		isCompleted: status,
	}));

const checkAllStatus = ({ state: { todos }}) =>
	todos.length && todos.every(({ isCompleted }) => isCompleted);

const removeTodo = ({ state: { todos }, data: { id: targetId }}) =>
	todos.filter(({ id }) => id !== targetId);

const clearCompletedTodos = ({ state: { todos }}) =>
	todos.filter(({ isCompleted }) => !isCompleted);

const operations = {
	all: (todos) => todos.map((todo) => todo),
	active: (todos) => todos.filter(({ isCompleted }) => !isCompleted),
	completed: (todos) => todos.filter(({ isCompleted }) => isCompleted),
};

const filterTodos = (context) => {
	const { state: { todos, selectedTab }} = context;

	return operations[selectedTab](todos);
};

const TodoManager = {
	createTodo,
	updateTodo,
	toggleStatus,
	toggleAllStatus,
	checkAllStatus,
	removeTodo,
	clearCompletedTodos,
	filterTodos,
};

export default TodoManager;
