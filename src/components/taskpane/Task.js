import { React } from 'react';
import { DataTable } from 'react-native-paper';


const Task = (context) => {
	const { data: { id, todo }} = context;

	return	<DataTable.Row key={id}	role="Task" className="task">
		
		<DataTable.Cell>{ todo }</DataTable.Cell>
		
	</DataTable.Row>;
};

export default Task;
