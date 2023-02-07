import { Box, Center, Heading, ScrollView, Text, VStack } from 'native-base';
import { React } from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<Box style={ { flex: 1, backgroundColor: '#af87f5' } }>
		<Center>
			<Heading color="white">
				<Text>TASKS</Text>
			</Heading>
		</Center>
		<ScrollView my="2">
			<VStack flex="1">
				<TaskList { ...context }/>
			</VStack>
		</ScrollView>
	</Box>;

export default TaskPane;
