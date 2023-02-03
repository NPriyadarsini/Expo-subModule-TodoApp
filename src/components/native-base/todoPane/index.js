import { Box, Center, VStack } from 'native-base';
import { React } from 'react';
import TodoListDisplay from './todoListDisplay';
import UserInputs from './userInputs';

const TodoPane = (context) =>
	<VStack>
		<Center>
			<UserInputs { ...context }/>
		</Center>
		<Center>
			<Box h="2xl">
				<TodoListDisplay { ...context }/>
			</Box>
		</Center>
	</VStack>;

export default TodoPane;
