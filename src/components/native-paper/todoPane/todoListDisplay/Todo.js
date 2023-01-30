import { React } from 'react';
import { DataTable } from 'react-native-paper';
import RemoveButton from './RemoveButton';
import TodoCheckBox from './TodoCheckBox';

const Todo = (context) => {
	const { actions, data } = context;
	const { id, todo } = data;

	return (
		<DataTable.Row
			key={ id }
			style={ { height: 60 } }
		>
			<DataTable.Cell style={ { flex: 0.3 } }>
				<TodoCheckBox { ...context }/>
			</DataTable.Cell>
			<DataTable.Cell onPress={ () => actions.setEditing(data) }>
				{todo}
			</DataTable.Cell>
			<DataTable.Cell style={ { flex: 0.3 } }>
				<RemoveButton { ...context }/>
			</DataTable.Cell>
		</DataTable.Row>
	);
};

export default Todo;
