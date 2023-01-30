import { React } from 'react';
import { DataTable } from 'react-native-paper';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

const Task = (context) => {
	const { data: { id, todo }} = context;

	return	<DataTable.Row key={ id }	role="Task" className="task">
		<DataTable.Cell style={ { flex: 0.3 } }>
			<AddButton { ...context }/>
		</DataTable.Cell>
		<DataTable.Cell style={ { flex: 0.8 } }>
			{ todo }
		</DataTable.Cell>
		<DataTable.Cell style={ { flex: 0.3 } }>
			<RemoveButton { ...context }/>
		</DataTable.Cell>
	</DataTable.Row>;
};

export default Task;
