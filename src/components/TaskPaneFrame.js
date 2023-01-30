import {React} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import context from '../../MuiTodoApp/src/core/context';
import { Text } from 'react-native-paper';
import TaskPane from './taskpane';


const TaskPaneFrame = () =>
	<SafeAreaView>
		<Text
			variant="titleLarge"
			style={ { textAlign: 'center' } }
		>
			TASKS</Text>
      <TaskPane {...context}/>
	</SafeAreaView>;

export default TaskPaneFrame;