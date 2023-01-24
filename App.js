/* eslint-disable no-console */
import { React, useState } from 'react';
import context from './MuiTodoApp/src/core/context';
import updateContext from '@laufire/resist';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/components/index';

const App = () => {
	// console.log(TodoManager.hasInput({ state: { input: '' }}));
	// console.log(context);
	const [state, setState] = useState(context.seed);

	updateContext(context, { state, setState });

	return (
		<SafeAreaProvider>
			<HomeScreen { ...context }/>
		</SafeAreaProvider>
	);
};

export default App;
