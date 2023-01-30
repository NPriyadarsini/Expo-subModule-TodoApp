import { React } from 'react';
import { DataTable } from 'react-native-paper';
import Task from './Task.js';

const TaskList = (context) => {
	const { state: { taskList }} = context;

	return (

		<DataTable role="TaskList" className="taskList">
			{
				taskList.map((task, id) =>
					<Task key={ id }{ ...{ ...context, data: task } }/>)
			}
		</DataTable>
	);
};

export default TaskList;