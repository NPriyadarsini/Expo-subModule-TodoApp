import { React } from 'react';
import { List } from 'react-native-paper';
import FilterBar from './FilterBar.js';
import TodoList from './TodoList.js';
import ToggleAllCheckbox from './ToggleAllCheckBox.js';

const TodoListDisplay = (context) =>
	<List.Section className="todoList" role="TodoListDisplay">
		<List.Subheader>
			<ToggleAllCheckbox { ...context }/>
			<FilterBar { ...context }/>
		</List.Subheader>
		<TodoList { ...context }/>
	</List.Section>;

export default TodoListDisplay;
