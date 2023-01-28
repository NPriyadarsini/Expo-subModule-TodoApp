import { React } from 'react';
import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import ClearCompleted from './ClearCompleted.js';
import FilterBar from './FilterBar.js';
import TodoList from './TodoList.js';
import ToggleAllCheckbox from './ToggleAllCheckBox.js';

const TodoListDisplay = (context) =>
	<ScrollView>
		<DataTable>
			<DataTable.Header>
				<DataTable.Cell>
					<FilterBar { ...context }/>
				</DataTable.Cell>
			</DataTable.Header>
			<DataTable.Row>
				<ToggleAllCheckbox { ...context }/>
				<ClearCompleted { ...context }/>
			</DataTable.Row>
			<TodoList { ...context }/>
		</DataTable>
	</ScrollView>;

export default TodoListDisplay;
