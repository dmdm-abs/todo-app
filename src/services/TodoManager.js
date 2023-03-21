import { rndString } from '@laufire/utils/random';

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
};

export default TodoManager;
