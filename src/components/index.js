import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import TodoPaneFrame from './TodoPaneFrame';

const TodoPaneTab = (context) => <TodoPaneFrame { ...context }/>;

const TaskPaneTab = (context) => <Text>TaskPane</Text>;

const HomeScreen = (context) => {
	const { state: { index }, config, actions } = context;
	const routes = config.tabs;

	const renderScene = BottomNavigation.SceneMap({
		TodoPane: () => TodoPaneTab(context),
		TaskPane: () => TaskPaneTab(context),
	});

	return (
		<BottomNavigation
			navigationState={ { index, routes } }
			onIndexChange={ (value) => actions.setIndex(value) }
			renderScene={ renderScene }
		/>
	);
};

export default HomeScreen;
