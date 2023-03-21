import { rndString } from '@laufire/utils/random';

const updateTodos = (context) => {
	const { state: { todos }, data: targetId } = context;

	return todos.map((todo) => {
		const { id, isCompleted } = todo;

		return {
			...todo,
			isCompleted: id === targetId ? !isCompleted : isCompleted,
		};
	});
};

const createTodo = (context) => {
	const { state: { currentTodo }, config: { idLength }} = context;

	return {
		id: rndString(idLength),
		text: currentTodo,
		isCompleted: false,
	};
};

const TodoManager = {
	createTodo,
	updateTodos,
};

export default TodoManager;
