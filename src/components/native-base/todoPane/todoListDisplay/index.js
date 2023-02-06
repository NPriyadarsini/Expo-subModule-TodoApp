import { React } from 'react';
import { Box, Center, Heading, ScrollView, Text, VStack } from 'native-base';
import TodoList from './TodoList';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';

const TodoListDisplay = (context) =>
	<Box w="80%" h="90%" mt="5%">
		<Center>
			<Heading color="white">
				<Text>TODOS</Text>
			</Heading>
			<FilterBar { ...context }/>
		</Center>
		<ScrollView my="2">
			<VStack flex="1">
				<TodoList { ...context }/>
			</VStack>
		</ScrollView>
		<Box>
			<ClearCompleted { ...context }/>
		</Box>
	</Box>;

export default TodoListDisplay;
