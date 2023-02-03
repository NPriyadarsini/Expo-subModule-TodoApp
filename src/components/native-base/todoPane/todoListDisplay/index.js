import { React } from 'react';
import { Box, Center, Heading, ScrollView, VStack } from 'native-base';
import TodoList from './TodoList';

const TodoListDisplay = (context) =>
	<Box>
		<Center>
			<Heading color="white">
				TODOS
			</Heading>
		</Center>
		<ScrollView w={ ['200', '300'] } h="80">
			<VStack flex="1">
				<TodoList { ...context }/>
			</VStack>
		</ScrollView>
	</Box>;

export default TodoListDisplay;
