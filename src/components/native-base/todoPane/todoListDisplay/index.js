import { React } from 'react';
import { Center, Heading, ScrollView, VStack } from 'native-base';
import TodoList from './TodoList';

const TodoListDisplay = (context) =>
	<Center>
		<Heading color="white">
			TODOS
		</Heading>
		<ScrollView w={ ['200', '300'] } h="80">
			<VStack flex="1">
				<TodoList { ...context }/>
			</VStack>
		</ScrollView>
	</Center>;

export default TodoListDisplay;
