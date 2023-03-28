import { rndString } from '@laufire/utils/random';

const createTask = ({ config: { taskLength, idLength }}) => ({
	id: rndString(idLength),
	text: rndString(taskLength),
	isCompleted: false,
});

const updateTask = ({ state: { tasks }, data: { id }}) =>
	tasks.filter(({ id: taskId }) => taskId !== id);

const removeTask = ({ state: { tasks }, data: { id: targetId }}) =>
	tasks.filter(({ id }) => targetId !== id);

const TaskManager = {
	createTask,
	updateTask,
	removeTask,
};

export default TaskManager;