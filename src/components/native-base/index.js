/* eslint-disable max-lines-per-function */
import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { Box, NativeBaseProvider } from 'native-base';
import TodoPane from './todoPane';

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
	scene: {
		flex: 1,
	},
});

const HomeScreen = (context) => {
	const { state: { index }, config, actions } = context;
	const routes = config.tabs;

	// eslint-disable-next-line react/no-unstable-nested-components
	const TodoPaneTab = () =>
		<Box key={ index } style={ { flex: 1, backgroundColor: '#15d1c5' } }>
			<TodoPane { ...context }/>
		</Box>;

	// eslint-disable-next-line react/no-unstable-nested-components
	const TaskPaneTab = () =>
		<Box style={ { flex: 1, backgroundColor: '#af87f5' } }/>;
	const renderScene = SceneMap({
		TodoPane: TodoPaneTab,
		TaskPane: TaskPaneTab,
	});

	return (
		<NativeBaseProvider>
			<TabView
				navigationState={ { index, routes } }
				onIndexChange={ (value) => actions.setIndex(value) }
				renderScene={ renderScene }
				initialLayout={ { width: Dimensions.get('window').width } }
				style={ styles.container }
			/>
		</NativeBaseProvider>
	);
};

export default HomeScreen;
