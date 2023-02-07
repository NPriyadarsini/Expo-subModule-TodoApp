import { Box, Center, VStack } from 'native-base';
import { React } from 'react';
import TodoListDisplay from './todoListDisplay';
import UserInputs from './userInputs';

const TodoPane = (context) =>
	<Box style={ { flex: 1, backgroundColor: '#15d1c5' } }>
		<VStack>
			<Center>
				<UserInputs { ...context }/>
			</Center>
			<Center>
				<Box h="2xl" w="md" alignItems="center">
					<TodoListDisplay { ...context }/>
				</Box>
			</Center>
		</VStack>
	</Box>;

export default TodoPane;
