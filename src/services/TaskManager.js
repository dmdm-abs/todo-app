import { rndString } from '@laufire/utils/random';

const createTask = ({ config: { taskLength, idLength }}) => ({
	id: rndString(idLength),
	text: rndString(taskLength),
	isCompleted: false,
});

const TaskManager = {
	createTask,
};

export default TaskManager;
