import * as React from 'react';
import TodoPane from './todoPane/index';
import context from '../../../MuiTodoApp/src/core/context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

const TodoPaneFrame = () =>
	<SafeAreaView>
		<Text
			variant="titleLarge"
			style={ { textAlign: 'center' } }
		>
			TODOS
		</Text>
		<TodoPane { ...context }/>
	</SafeAreaView>;

export default TodoPaneFrame;
