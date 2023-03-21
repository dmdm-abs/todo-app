import { filter, map } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const createTodo = (context) => {
	const { state: { currentTodo }, config: { idLength }} = context;

	return {
		id: rndString(idLength),
		text: currentTodo,
		isCompleted: false,
	};
};

const updateTodos = (context) => {
	const { state: { todos }, data: targetId } = context;

	return map(todos, (todo) => {
		const { id, isCompleted } = todo;

		return {
			...todo,
			isCompleted: id === targetId ? !isCompleted : isCompleted,
		};
	});
};

const removeTodo = ({ state: { todos }, data: targetId }) =>
	filter(todos, ({ id }) => id !== targetId);

const TodoManager = {
	createTodo,
	updateTodos,
	removeTodo,
};

export default TodoManager;
