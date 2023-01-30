import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

const TaskPaneFrame = () =>

	<SafeAreaView>
		<Text
			variant="titleLarge"
			style={ { textAlign: 'center' } }
		>
			TASKS</Text>
	</SafeAreaView>;

export default TaskPaneFrame;