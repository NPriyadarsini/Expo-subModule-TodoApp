import { React } from 'react';
import { List} from 'react-native-paper';
import TodoList from './TodoList.js';
import ToggleAllCheckBox from './ToggleAllCheckBox.js';


const TodoListDisplay = (context) =>
	<List.Section className="todoList" role="TodoListDisplay">
  <List.Subheader><ToggleAllCheckBox {...context}/>TodoList</List.Subheader>
		<TodoList {...context}/>
	</List.Section>;

export default TodoListDisplay;
