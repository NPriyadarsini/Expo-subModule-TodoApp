/* eslint-disable no-console */
import { React, useState ,useEffect } from 'react';
import context from './MuiTodoApp/src/core/context';
import updateContext from '@laufire/resist';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/components/index';
import TaskManager from './MuiTodoApp/src/services/taskManager';
import Ticker from './MuiTodoApp/src/services/ticker';

const App = () => {
	const [state, setState] = useState(context.seed);

	updateContext(context, { state, setState });
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	return (
		<SafeAreaProvider>
			<HomeScreen { ...context }/>
		</SafeAreaProvider>
	);
};

export default App;
