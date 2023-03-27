import { rndString } from '@laufire/utils/random';

const createTask = ({ config: { taskLength }}) => rndString(taskLength);

const TaskManager = {
	createTask,
};

export default TaskManager;
