import { registerRootComponent } from 'expo';
import updateContext from '@laufire/resist';
import { React, useState } from 'react';
import context from '../MuiTodoApp/src/core/context';
import App from './App';

const Entry = () => {
	const [state, setState] = useState(context.seed);

	updateContext(context, { state, setState });
	// eslint-disable-next-line no-console
	console.log(context);
	return <App { ...context }/>;
};

registerRootComponent(Entry);
