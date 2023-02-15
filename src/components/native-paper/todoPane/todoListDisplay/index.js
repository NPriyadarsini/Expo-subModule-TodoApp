import { React } from 'react';
import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import TodoList from './TodoList.js';

const TodoListDisplay = (context) =>
	<ScrollView style={ { flexGrow: 0.6 } }>
		<DataTable>
			<TodoList { ...context }/>
		</DataTable>
	</ScrollView>
;

export default TodoListDisplay;
