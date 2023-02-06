import { React } from 'react';
import { Box, Center, Heading, ScrollView, Text, VStack } from 'native-base';
import TodoList from './TodoList';
import FilterBar from './FilterBar';

const TodoListDisplay = (context) =>
	<Box>
		<Box>
			<FilterBar { ...context }/>
		</Box>
		<Center>
			<Heading color="white">
				<Text>TODOS</Text>
			</Heading>
		</Center>
		<ScrollView w={ ['200', '300'] } h="80">
			<VStack flex="1">
				<TodoList { ...context }/>
			</VStack>
		</ScrollView>
	</Box>;

export default TodoListDisplay;
