import { rndString } from '@laufire/utils/random';

const createTask = ({ config: { taskLength, idLength }}) => ({
	id: rndString(idLength),
	text: rndString(taskLength),
});

const removeTask = ({ state: { tasks }, data: { id: targetId }}) =>
	tasks.filter(({ id }) => targetId !== id);

const TaskManager = {
	createTask,
	removeTask,
};

export default TaskManager;
