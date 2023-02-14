import * as React from 'react';
import TodoPane from './todoPane/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

const TodoPaneFrame = (context) =>
	<SafeAreaView>
		<Text
			variant="titleLarge"
			style={ { textAlign: 'center' } }
		>TODOS</Text>
		<TodoPane { ...context }/>
	</SafeAreaView>;

export default TodoPaneFrame;
