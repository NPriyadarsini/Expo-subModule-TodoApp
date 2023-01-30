/* eslint-disable no-console */
import { React, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './components/index';
import TaskManager from '../MuiTodoApp/src/services/taskManager';
import Ticker from '../MuiTodoApp/src/services/ticker';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	return (
		<SafeAreaProvider>
			<HomeScreen { ...context }/>
		</SafeAreaProvider>
	);
};

export default App;
