import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { Box } from 'native-base';

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
	scene: {
		flex: 1,
	},
});

const TodoPaneTab = () =>
	<Box style={ { flex: 1, backgroundColor: '#ff4081' } }/>;

const TaskPaneTab = () =>
	<Box style={ { flex: 1, backgroundColor: '#673ab7' } }/>;

const HomeScreen = (context) => {
	const { state: { index }, config, actions } = context;
	const routes = config.tabs;

	const renderScene = SceneMap({
		TodoPane: TodoPaneTab,
		TaskPane: TaskPaneTab,
	});

	return (
		<TabView
			navigationState={ { index, routes } }
			onIndexChange={ (value) => actions.setIndex(value) }
			renderScene={ renderScene }
			initialLayout={ { width: Dimensions.get('window').width } }
			style={ styles.container }
		/>
	);
};

export default HomeScreen;
