/* eslint-disable max-lines-per-function */
import * as React from 'react';
import { TabView } from 'react-native-tab-view';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import TodoPane from './todoPane';
import TaskPane from './taskPane';

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
	scene: {
		flex: 1,
	},
});

const scenes = {
	TodoPane,
	TaskPane,
};

const HomeScreen = (context) => {
	const { state: { index }, config, actions } = context;
	const routes = config.tabs;

	const renderScene = ({ route }) => scenes[route.key](context);

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
