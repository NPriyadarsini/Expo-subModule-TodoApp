import { React } from 'react';
import Task from './Task.js';

const TaskList = (context) => {
	const { state: { taskList }} = context;

	return 	(
		taskList.map((task, id) =>
			<Task key={ id }{ ...{ ...context, data: task } }/>)
	);
};

export default TaskList;
