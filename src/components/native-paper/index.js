import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TaskPaneFrame from './TaskPaneFrame';
import TodoPaneFrame from './TodoPaneFrame';

const scenes = {
	TodoPane: TodoPaneFrame,
	TaskPane: TaskPaneFrame,
};

const HomeScreen = (context) => {
	const { state: { index }, config, actions } = context;
	const routes = config.tabs;

	const renderScene = ({ route }) => scenes[route.key](context);

	return (
		<SafeAreaProvider>
			<BottomNavigation
				navigationState={ { index, routes } }
				onIndexChange={ (value) => actions.setIndex(value) }
				renderScene={ renderScene }
			/>
		</SafeAreaProvider>
	);
};

export default HomeScreen;
