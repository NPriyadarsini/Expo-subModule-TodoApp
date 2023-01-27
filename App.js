/* eslint-disable no-console */
import { React, useState } from 'react';
import context from './MuiTodoApp/src/core/context';
import updateContext from '@laufire/resist';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/components/index';

const App = () => {
	const [state, setState] = useState(context.seed);

	updateContext(context, { state, setState });

	return (
		<SafeAreaProvider>
			<HomeScreen { ...context }/>
		</SafeAreaProvider>
	);
};

export default App;
