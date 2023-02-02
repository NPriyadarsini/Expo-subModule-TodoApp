import { Center, VStack } from 'native-base';
import { React } from 'react';
import TodoListDisplay from './todoListDisplay';
import UserInputs from './userInputs';

const TodoPane = (context) => <VStack>
	<Center>
		<UserInputs { ...context }/>
	</Center>
	<Center>
		<TodoListDisplay { ...context }/>
	</Center>
</VStack>;

export default TodoPane;
