import { rndString } from '@laufire/utils/random';

const createTask = ({ config: { taskLength, idLength }}) => ({
	id: rndString(idLength),
	text: rndString(taskLength),
	isCompleted: false,
});

const updateTask = (context) => {
	const { state: { tasks }, data: { id }} = context;

	return tasks.filter(({ id: taskId }) => taskId !== id);
};

const TaskManager = {
	createTask,
	updateTask,
};

export default TaskManager;
