import { React } from 'react';
import { Center, Heading, VStack } from 'native-base';
import TodoList from './TodoList';

const TodoListDisplay = (context) =>

	<VStack>
		<Center>
			<Heading color="white">
				TODOS
			</Heading>
		</Center>
		<Center>
			<TodoList { ...context }/>
		</Center>
	</VStack>;

export default TodoListDisplay;
