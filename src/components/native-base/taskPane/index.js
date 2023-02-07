import { Box, Center, Heading, ScrollView, Text, VStack } from 'native-base';
import { React } from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<Box style={ { flex: 1, backgroundColor: '#bdf075' } }>
	<Center>
	<Box h="2xl" w="md" mt="10" alignItems="center">
			<Heading color="white" >
			<Text>TASKS</Text>
			</Heading>
		<ScrollView my="2">
			<VStack flex="1">
				<TaskList { ...context }/>
			</VStack>
		</ScrollView>
		</Box>
		</Center>
	</Box>;

export default TaskPane;
