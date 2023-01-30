import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import TaskPaneFrame from './TaskPaneFrame';
import TodoPaneFrame from './TodoPaneFrame';

const TodoPaneTab = () => <TodoPaneFrame/>;

const TaskPaneTab = () => <TaskPaneFrame/>;

const HomeScreen = (context) => {
	const { state: { index }, config, actions } = context;
	const routes = config.tabs;

	const renderScene = BottomNavigation.SceneMap({
		TodoPane: TodoPaneTab,
		TaskPane: TaskPaneTab,
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
