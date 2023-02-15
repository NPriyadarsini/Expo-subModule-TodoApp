import { React } from 'react';
import { Surface } from 'react-native-paper';
import TodoListDisplay from './todoListDisplay';
import ClearCompleted from './userInput/ClearCompleted';
import UserInputs from './userInput/index';

const TodoPane = (context) =>
	<Surface className="todoPane" role="TodoPane">
		<UserInputs { ...context }/>
		<TodoListDisplay { ...context }/>
		<ClearCompleted { ...context }/>
	</Surface>;

export default TodoPane;
