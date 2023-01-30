import { React } from 'react';
import { ScrollView } from 'react-native';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<ScrollView>
		<TaskList { ...context }/>
	</ScrollView>;

export default TaskPane;
