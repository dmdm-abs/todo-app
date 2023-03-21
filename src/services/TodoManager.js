import { filter, map } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const createTodo = ({ state: { currentTodo }, config: { idLength }}) => ({
	id: rndString(idLength),
	text: currentTodo,
	isCompleted: false,
});

const changeStatus = ({ state: { todos }, data: targetId }) =>
	map(todos, (todo) => {
		const { id, isCompleted } = todo;

		return {
			...todo,
			isCompleted: id === targetId ? !isCompleted : isCompleted,
		};
	});

const removeTodo = ({ state: { todos }, data: targetId }) =>
	filter(todos, ({ id }) => id !== targetId);

const changeAllStatus = ({ state: { todos }, data: status }) =>
	map(todos, (todo) => ({
		...todo,
		isCompleted: status,
	}));

const TodoManager = {
	createTodo,
	changeStatus,
	changeAllStatus,
	removeTodo,
};

export default TodoManager;