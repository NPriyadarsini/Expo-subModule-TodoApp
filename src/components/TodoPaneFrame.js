import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import TodoPane from './todoPane/index';
import context from '../../MuiTodoApp/src/core/context';

const TodoPaneFrame = () =>

	<Surface
		elevation={ 1 }
	>
		<Text variant="headlineMedium">TodoPane</Text>
		<TodoPane { ...context }/>
	</Surface>;

export default TodoPaneFrame;
