import { React, useEffect } from 'react';
import TaskManager from '../MuiTodoApp/src/services/taskManager';
import Ticker from '../MuiTodoApp/src/services/ticker';
import HomeScreen from './components/native-paper';

const App = (context) => {
	useEffect(() => {
		TaskManager.init(context);
	}, []);
	useEffect(() => {
		Ticker.start(context);
	}, []);

	return <HomeScreen { ...context }/>;
};

export default App;
